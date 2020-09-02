---
date: '2017-12-31T18:00:00.000Z'
title: 'Encapsulating data on GraphQL using Loaders'
category: 'Programming'
tags: ['node.js', 'graphql']
banner: './images/banner-graphql.png'
---

<!-- This was originally posted to: https://medium.com/@jonathancardoso/encapsulating-data-on-graphql-using-loaders-9387b805c4fc -->

If you have already used GraphQL, you probably saw that it can consume data coming from the most varied sources, be it a local database or an external API, while centralizing them in a single, self-contained, API.

Here at [Entria](https://medium.com/entria), we built a structure using files that we call `Loaders`, which are kinda like a database abstraction layer, but for our GraphQL data sources. Here is an introduction to this simple concept, heavily used everywhere else.

![graphql gateway illustration](./images/graphql-gateway.png 'Imagine that your GraphQL server is that guy in the middle')
Figure: Imagine that your GraphQL server is that guy in the middle

You can use them to wrap your data fetching logic, this way it doesn’t matter where this data is coming from, be it, for example, your MongoDB instance:

```flow
// @flow

// Types, etc ...

export const placesAutoComplete = async (
  ctx: GraphQLContext,
  { search }: PlacesAutoCompleteOptions,
): Promise<?PlacesAutoCompleteOutput> => {
  const conditions = {
    name: {
      $regex: new RegExp(`${search}`, 'ig'),
    },
  }

  const places = MyPlaces.find(conditions)

  // map places to the expected result and return it
  //  just an example:
  const result = places.map((item) => item)
  return result
}
```

Code: A method that fetches the data required by your GraphQL resolver

or an external API:

```flow
// @flow

import { createClient } from '@google/maps'

const gMapsClient = createClient({
  key: 'MY_RANDOM_KEY',
  Promise: Promise,
})

// Types, etc...

export const placesAutoComplete = async (
  ctx: GraphQLContext,
  args: PlacesAutoCompleteOptions,
): Promise<?PlacesAutoCompleteOutput> => {
  const places = await gMapsClient.placesAutoComplete(args).asPromise()
  // map places to the expected result and return it
  //  just an example:
  const result = places.map((item) => item)
  return result
}
```

Code: Another method that fetches data for your GraphQL resolver, but this time from another source

Your GraphQL resolvers are not going to know about how this data is fetched, all they expect is a single, well-defined interface, that you have already set:

```flow
// @flow

// ...

export default new GraphQLObjectType({
  // ...
  fields: () => ({
    placesAutoComplete: {
      // ...
      resolve: async (obj, args, context) => {
        if (!args.search) return null

        const results = await PlaceAutocompleteLoader.search(context, args)

        // do something with results
      },
    },
  }),
})
```

<!-- TODO: Use embed link -->

This allows you to create powerful models for those data sources, permitting you to not have just the data fetching logic isolated, but even more complex logic, like access control rules, which I’ve written about on another post: [Access Control List on GraphQL with Loaders](https://medium.com/@jonathancardoso/access-control-list-on-graphql-with-loaders-b0ab1a80651d)

The examples above are using just simple functions, but imagine a single Loader file per object type that your GraphQL server exposes, with multiple simple functions for retrieving data related to this object.

Besides the data fetching encapsulation, we also use those loaders to hook up the [dataloader library](https://github.com/facebook/dataloader) from Facebook, which can be used as a per request cache, to make sure one single record is not retrieved more than one time. From their Readme:

> DataLoader is first and foremost a data loading mechanism, and its cache only serves the purpose of not repeatedly loading the same data in the context of a single request to your Application. To do this, it maintains a simple in-memory memoization cache (more accurately: .load() is a memoized function).

Check our GraphQL dataloader boilerplate for a more complete example: [entria/graphql-dataloader-boilerplate](https://github.com/entria/graphql-dataloader-boilerplate)
