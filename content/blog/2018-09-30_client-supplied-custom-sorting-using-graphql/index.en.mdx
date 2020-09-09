---
date: '2018-09-30T18:00:00.000Z'
title: 'Client-Supplied Custom Sorting Using GraphQL'
category: 'Programming'
tags: ['graphql', 'sorting', 'graphql-schema-design']
banner: './images/banner-graphql-sorting.png'
---

<!-- This was originally posted to: https://itnext.io/client-supplied-custom-sorting-using-graphql-54e4b87f6011 -->

It’s not uncommon the need to sort/order data returned from an API, based on arguments sent by the client. With REST we could just use query-strings, but how to do it in GraphQL?

Most databases allow to sort on multiple fields at the same time, and the sorting order can differ from one to another, one way to translate this into GraphQL, and that I’ve been using, is to use enums and object input arguments.

## Example

Let’s say we have a resolver `getUsers: [User!]!` which returns users from MongoDB, and we are sorting the results by `name` and `createdAt`:

```js
const users = await ctx.db.users.find().sort({
  name: 1, // ascending
  createdAt: -1, // descending
})
```

But we want to allow the client to specify the fields that are going to be sorted, and their respective order.

First, we could have a `Direction` enum, whose values are `ASC` and `DESC`:

```graphql
enum DirectionEnum {
  ASC
  DESC
}
```

Using `graphql-js` this could be defined like the following:

```js
import { GraphQLEnumType } from 'graphql'

export const DirectionEnumType = new GraphQLEnumType({
  name: 'DirectionEnum',
  values: {
    ASC: {
      value: 1,
    },
    DESC: {
      value: -1,
    },
  },
})
```

Now let’s create a enum to represent the fields that are allowed to be sorted on our `User`:

```graphql
enum UserSortFieldEnum {
  NAME
  CREATED_AT
}
```

In `graphql-js`:

```js
import { GraphQLEnumType } from 'graphql'

export const UserSortFieldEnumType = new GraphQLEnumType({
  name: 'UserSortFieldEnum',
  values: {
    NAME: {
      value: 'name',
    },
    CREATED_AT: {
      value: 'createdAt',
    },
  },
})
```

Now, to connect those two together, we are going to make a input type called `UserSort`:

```graphql
input UserSort {
  field: UserSortFieldEnum!
  direction: DirectionEnum!
}
```

`graphql-js`:

```js
import { GraphQLInputObjectType, GraphQLNonNull } from 'graphql'

import { DirectionEnumType } from './DirectionEnum'
import { UserSortFieldEnumType } from './UserSortFieldEnum'

const UserSortInputType = new GraphQLInputObjectType({
  name: 'UserSort',
  fields: () => ({
    field: {
      type: GraphQLNonNull(UserSortFieldEnumType),
    },
    direction: {
      type: GraphQLNonNull(DirectionEnumType),
    },
  }),
})
```

Then our `getUsers` resolver will become:

```graphql
  getUsers(sort: [UserSort!]): [User!]!
```

And now the client can query it and specify any sort order they need:

```graphql
query GetUsers {
  getUsers(sort: [
    {
      field: NAME,
      direction: DESC,
    },
    {
      field: CREATED_AT,
      direction: ASC,
    }
  ]) {
    # ...
  }
}
```

And if you are using MongoDB, and are going to start using this, [`@entria/graphql-mongo-helpers`](https://github.com/entria/graphql-mongo-helpers) has a simple helper to transform the `sort` argument supplied by the client to something that can be used on MongoDB `sort()` method.

It’s called `buildSortArg`, using it on our `getUser` resolver would look like this:

```js
// ...

import { buildSortFromArg } from '@entria/graphql-mongo-helpers'

// ... inside getUser resolver:
const users = await ctx.db.users.find().sort(buildSortFromArg(args.sort))
```

The library also exports a SDL definition and `GraphQLObject` for the `Direction` enum, `DirectionEnum` and `DirectionEnumType` respectively.

## Remarks

This same idea can be used with any other database library, `knex` for example has the `orderBy` method which accepts an argument in the format:

```typescript
{
  column: string,
  order: 'asc' | 'desc'
}
```

and for that, a function called `buildOrderByFromArg` can be as simple as:

```js
export default function buildOrderByFromArg(orderByArg) {
  return orderByArg.reduce(
    (acc, item) => [
      ...acc,
      {
        column: item.field,
        order: item.direction === -1 ? 'desc' : 'asc',
      },
    ],
    [],
  )
}
```
