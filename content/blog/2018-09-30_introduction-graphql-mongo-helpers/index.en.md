---
date: '2018-09-30T19:00:00.000Z'
title: 'Introduction to GraphQL Mongo Helpers'
category: 'Programming'
tags: ['graphql', 'mongodb', 'node.js', 'backend', 'library', 'open-source']
banner: './images/banner-graphql-mongodb.png'
---

<!-- This was originally posted to: https://itnext.io/introduction-to-graphql-mongo-helpers-a457944d4c8a -->

If you are using MongoDB and GraphQL, you probably have some arguments on your resolvers to filter the data returned from MongoDB. Using those helpers you can reduce the amount of code duplication when doing that!

https://github.com/entria/graphql-mongo-helpers

## Installing

```
yarn install @entria/graphql-mongo-helpers
```

Right now, the package has two helpers, `createMongoConditionsFromFilters` and `buildSortFromArg`. In this post, we will look into the first one.

### createMongoConditionsFromFilters(filterArg, mapping, context)

The basic idea around this helper is that if you have a resolver that looks like this:

```graphql
input UserFilter {
  username: String
  age: Int
}

type Query {
  users(filter: UserFilter): Blah
}
```

you can define a mapping for the `filter` arg:

```ts
// ...

const mapping = {
  username: {
    type: FILTER_CONDITION_TYPE.MATCH_1_TO_1,
    format: (val: string) => new RegExp(`^${escapeRegex(val)}`),
  },
}

// ...
```

and inside your resolver do something like that:

```ts
// ...

const resolvers = {
  // ...
  Query: {
    // ...
    users: async (_, args, ctx, info) {
      const filterResult = buildMongoConditionsFromFilters(args.filter, filterMapping);
      return ctx.db.users.find(filterResult.conditions)
    }
  }
}

// ...
```

If the client supplied the following query:

```graphql
query ExampleQuery {
  users(filter: { username: "Blah", age: 19 })
}
```

`filterResult` will have the following value:

```ts
{
  conditions: {
    username: /^Blah/,
    age: 19,
  },
  pipeline: [],
}
```

As you can see, `username` became a Regex, and `age` was passed as in since we have not mapped it.

Fields that are not mapped, are by default treated as having a `type` of `MATCH_1_TO_1`, and a `key` identical to the passed one.

#### Operators

You can also use [MongoDB comparison operators](https://docs.mongodb.com/manual/reference/operator/query/#comparison), you just need to suffix the field name with it in the GraphQL input type. Remember that on the mapping you don’t need to specify the suffix, just the field name, for example, if instead of `graphql|>age: Int` we had `graphql|>age_gte: Int`, the `filterResult` above would look like this:

```ts
{
  conditions: {
    username: /^Blah/,
    age: { $gte: 19 },
  },
  pipeline: [],
}
```

#### Advanced Filter Types

Besides `MATCH_1_TO_1`, there is also `AGGREGATE_PIPELINE` and `CUSTOM_CONDITION`, `CUSTOM_CONDITION` is the same than `MATCH_1_TO_1`, but with the `format` function being required and used to return some conditions that will be merged into the resulting object.

For instance, the following:

```ts
const mapping = {
  search: {
    type: FILTER_CONDITION_TYPE.CUSTOM_CONDITION,
    format: (search: string) => ({
      $or: [
        {
          name: search,
        },
        {
          email: search,
        },
      ],
    }),
  },
}
```

would add the `$or` to the final `conditions` object.

If you want the client to specify `OR` conditions like above, there is also support for that:

```graphql
input UserFilter {
  OR: [UserFilter!]
  AND: [UserFilter!]
  username: String
  search: String
}

# ...

type Query {
  users(filter: UserFilter): Blah
}
```

Code: Schema

```graphql

# query
query ExampleOrAnd {
  users(filter: {
    AND: [
      {
        username: "user",
      },
      {
        OR: [
          {
            search: "something"
          },
          {
            search: "something else"
          }
        ]
      }
    ]
  }
}

# AND can be ommited, so this is the same than above:
query ExampleOrAnd {
  users(filter: {
    username: "user",
    OR: [
      {
        search: "something"
      },
      {
        search: "something else"
      }
    ]
  }
}
```

Code: Query

```ts
// ...
const resolvers = {
  // ...
  Query: {
    // ...
    users: async (_, args, ctx, info) {
      const filterResult = buildMongoConditionsFromFilters(args.filter, filterMapping);
      return ctx.db.users.find(filterResult.conditions)
    }
  }
}

// ...

// filterResult will be:
{
  conditions: {
    username: 'user',
    $or: [
      {
        search: 'something',
      },
      {
        search: 'something else',
      }
    ]
  },
  pipeline: [],
}
```

#### AGGREGATE_PIPELINE

In case your filter depends on some data that is only available via [MongoDB Aggregation Pipeline](https://docs.mongodb.com/manual/core/aggregation-pipeline/), this is the type you want to use:

```graphql
# schema
input UserFilter {
  username: String
  search: String
}

# ...

type Query {
  users(filter: UserFilter): Blah
}
```

Code: Schema

```graphql
query ExampleOrAnd {
  users(filter: {
    username: "user"
    search: "something"
  }
}
```

Code: Query

```ts
// mapping

// ...

const mapping = {
  search: {
    type: FILTER_CONDITION_TYPE.AGGREGATE_PIPELINE,
    pipeline: (value: string) => [
      {
        $match: {
          someField: value,
        },
      },
      // other pipelines
    ],
  },
}

// ...
```

```ts
// ...
const resolvers = {
  // ...
  Query: {
    // ...
    users: async (_, args, ctx, info) {
      const filterResult = buildMongoConditionsFromFilters(args.filter, filterMapping);
      const { conditions, pipeline } = filterResult.conditions;
      const finalPipeline = [{ $match: conditions }, ...pipeline];
      return ctx.db.users.aggregate(finalPipeline)
    }
  }
}

// ...

// filterResult will be:
{
  conditions: {
    username: 'user',
  },
  pipeline: [
    {
      $match: {
        someField: 'something',
      },
    },
  ],
};
```

From the above example it’s possible to see that we can combine both types together.

> ⚠ Note: You cannot use `AND` or `OR`, like in the previous example, if you have a filter of type `AGGREGATE_PIPELINE`

---

<!-- TODO: Use correct link -->

That was it, the other helper called `buildSortArg` is material for another post, and it’s much more simple:
[Client-Supplied Custom Sorting Using GraphQL
](https://medium.com/@jonathancardoso/client-supplied-custom-sorting-using-graphql-54e4b87f6011)
