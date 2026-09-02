---
date: '2017-12-31T18:00:00.000Z'
title: 'Access Control List on GraphQL with Loaders'
category: 'Programming'
tags: ['node.js', 'graphql']
banner: './images/banner-graphql.png'
---

<!-- This was originally posted to: https://medium.com/@jonathancardoso/access-control-list-on-graphql-with-loaders-b0ab1a80651d -->

<!-- TODO: Link to the correct post -->

In our previous post, we saw [how to encapsulate data from any data source to be used on our GraphQL resolvers using Loaders](https://medium.com/@jonathancardoso/encapsulating-data-on-graphql-using-loaders-9387b805c4fc), now let’s see a more robust example of that, on how to create some access control rules directly on those loaders.

This is mainly based on our graphql dataloader boilerplate project on GitHub, and previous reading of the code on that repo will make this post easier to understand: [entria/graphql-dataloader-boilerplate](https://github.com/entria/graphql-dataloader-boilerplate)

Let’s start with following User loader:

```flow
// @flow
import DataLoader from 'dataloader';
import { User as UserModel } from '../model';
import { connectionFromMongoCursor, mongooseLoader } from '@entria/graphql-mongoose-loader';

import type { ConnectionArguments } from 'graphql-relay';
import type { GraphQLContext } from '../TypeDefinition';

type UserType = {
  id: string,
  _id: string,
  name: string,
  password: string,
  email: string,
  active: boolean,
};

export default class User {
  id: string;
  _id: string;
  name: string;
  email?: string;
  active?: boolean;

  constructor(data: UserType, { user }: GraphQLContext) {
    this.id = data.id;
    this._id = data._id;
    this.name = data.name;

    // you can only see your own email, and your active status
    if (user && user._id.equals(data._id)) {
      this.email = data.email;
      this.active = data.active;
    }
  }
}

export const getLoader = () => new DataLoader(ids => mongooseLoader(UserModel, ids));

const viewerCanSee = (context, data) => {
  // Anyone can see another user
  return true;
};

export const load = async (context: GraphQLContext, id: string): Promise<?User> => {
  if (!id) {
    return null;
  }

  let data;
  try {
    data = await context.dataloaders.UserLoader.load(id);
  } catch (err) {
    return null;
  }
  return viewerCanSee(context, data) ? new User(data, context) : null;
};

export const clearCache = ({ dataloaders }: GraphQLContext, id: string) => {
  return dataloaders.UserLoader.clear(id.toString());
};

export const loadUsers = async (context: GraphQLContext, args: ConnectionArguments) => {
  const where = args.search ? { name: { $regex: new RegExp(`^${args.search}`, 'ig') } } : {};
  const users = UserModel.find(where, { _id: 1 }).sort({ createdAt: -1 });

  return connectionFromMongoCursor({
    cursor: users,
    context,
    args,
    loader: load,
  });
};
```

Code: User Loader

First, see how we have two type definitions, we have `UserType` and `User` class, the motivation behind this is that `UserType` is the type returned by our data source, in this case, it’s our user document on MongoDB, while the `User` class is the return type of our Loader, that is, the data already encapsulated.

Why is this distinction important? Remember that we said, in our previous post, that a well-defined interface should be returned to our GraphQL resolvers? The `User` class on this Loader is that well-defined interface.

## Hiding some fields

Looking more into the differences between the two types, there is no `password` on the data returned, because for security reasons this data should not be available on our GraphQL server.

We are also filtering the `email` and `active` properties out of the returned data, in case the logged-in user is not the same than the User being loaded (we keep the currently logged user in the GraphQL context, see: https://github.com/entria/graphql-dataloader-boilerplate/blob/debb09a3d/src/app.js#L38).

```flow
// you can only see your own email, and your active status
if (user && user._id.equals(data._id)) {
  this.email = data.email
  this.active = data.active
}
```

## Hiding Everything

Until now we are just omitting some fields in the returned data, but what if we want to return `null` for this user if some conditions are met?

While loading the user information, in the `load` function, we are calling another function called `viewerCanSee`:

```flow
return viewerCanSee(context, data) ? new User(data, context) : null
```

This method can be used to verify if the user data should be returned or not, for example, if in this app, users can only see themselves, and no one else, unless they have an `admin` flag, which in this case they can see everyone, we could use the following `viewerCanSee` implementation:

```flow
const viewerCanSee = ({ user }, data) => {
  return user.admin || user._id.equals(data._id)
}
```

This can be as complex as you want, you could have a pre-built ACL for the logged user stored in the context, with the permissions for every resource on your API, and check for it on the `viewerCanSee` of your loaders.

---

That is it, that is the main idea behind the loaders files on our GraphQL boilerplate, feel free to submit pull requests there if you think we missed anything, or if you want to improve the code, we ❤️ pull requests.

\*[ACL]: Acess Control List
