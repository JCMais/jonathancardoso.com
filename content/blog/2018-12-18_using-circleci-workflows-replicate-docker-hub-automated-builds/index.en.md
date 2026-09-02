---
date: '2018-12-18T18:00:00.000Z'
title: 'Using CircleCI Workflows to Replicate Docker Hub Automated Builds'
category: 'Programming'
tags: ['circleci', 'docker', 'ci-cd', 'external-technical-writing']
externalLinks:
  canonical: 'https://circleci.com/blog/using-circleci-workflows-to-replicate-docker-hub-automated-builds/'
publisher:
  name: 'CircleCI'
  id: '@circleci'
  url: 'https://circleci.com/blog/'
  logoUrl: 'https://d3r49iyjzglexf.cloudfront.net/logo-wordmark-black-7fec8eb34f3f7d8a2d75b22e789bca438ae7f6174a7949784054e726c5acdccb.svg'
---

[CircleCI workflows](https://circleci.com/docs/2.0/workflows/) is a powerful feature that can be used to make your deployment process simple and intuitive. In this article, we will learn how to use them to automatically push images to the Docker registry, just like Docker Hub’s own automated build process, but with all of the customization that your own build process offers.

## CircleCI workflows

> A workflow is a set of rules for defining a collection of jobs and their run order. Workflows support complex job orchestration using a simple set of configuration keys to help you resolve failures sooner.
> Source: [CircleCI Workflows Documentation](https://circleci.com/docs/2.0/workflows/)

In our workflow, pushing a commit to the `master` branch will run a specific job that publishes an image with the `latest` tag on Docker Hub. Each commit will also add a Git tag to the image as an image tag and publish the image with that tag, too. Finally, we will look into how to use [CircleCI’s environment variables](https://circleci.com/docs/2.0/env-vars/) to automatically publish incremental versions of our images instead of using Git tags.

## Building our Docker image

Let’s start with a basic Docker image that just prints the arguments passed when it is run. The Dockerfile will look as simple as this:

```Dockerfile
FROM alpine:3.8

ENTRYPOINT [ "echo" ]
```

Building and running the image locally should show us that it is working correctly:

```bash {promptUser: jcm}{prompHost: dev.localhost}{outputLines: 2-11,13}
docker build -t building-on-ci .
Sending build context to Docker daemon  4.608kB
Step 1/2 : FROM alpine:3.8
  ---> 196d12cf6ab1
Step 2/2 : ENTRYPOINT [ "echo" ]
  ---> Running in fe2151b22bc1
Removing intermediate container fe2151b22bc1
  ---> edc0ca6e654a
Successfully built edc0ca6e654a
Successfully tagged ci-workflows:latest

docker run building-on-ci "Hello!"
Hello!
```

Now that we have our image, we need to push it to our GitHub repository.

To start building our image on each commit, we are going to bootstrap our project with the following config file. In your project’s root directory, create a `.circle` directory and save the following lines as `config.yml`:

```yaml
version: 2
jobs:
  build:
    environment:
      IMAGE_NAME: jonathancardoso/building-on-ci
    docker:
      - image: circleci/buildpack-deps:stretch
    steps:
      - checkout
      - setup_remote_docker
      - run:
          name: Build Docker image
          command: docker build -t $IMAGE_NAME:latest .
workflows:
  version: 2
  build-master:
    jobs:
      - build:
          filters:
            branches:
              only: master
```

We are using a pre-built Docker image available from CircleCI called `circleci/buildpack-deps` to run our build. CircleCI has many custom images on Docker Hub that extend the official images with extra tools that are useful in a CI/CD environment. Check the [CircleCI images](https://circleci.com/docs/2.0/circleci-images/) docs for more information.

There is also an environment variable called `IMAGE_NAME` which we are going to use to set the name of our Docker image. It is imperative that you change it to your username/orgname instead of using mine (`jonathancardoso`). Otherwise, you are going to get an error when trying to publish that image to Docker Hub.

For now, our config has a single workflow called `build-master` that runs a single build job when we push a commit to the `master` branch. This job simply builds our Docker image and does nothing more.

One of our steps is called `setup_remote_docker` and is one of the most important ones when building Docker images on CircleCI. Since our job steps are run inside of a Docker image, they cannot build other Docker images. The `setup_remote_docker` command tells CircleCI to allocate a new Docker Engine, separate from the environment that is running our job, specifically to execute the Docker commands. Check the [building Docker images](https://circleci.com/docs/2.0/building-docker-images/) docs for more information.

Example of execution: https://circleci.com/gh/JCMais/docker-building-on-ci/1

## Publishing an image to Docker Hub with the :latest tag on every commit to master

Now that we are building our image on every commit to `master`, we need to create a new job to also publish that image to Docker Hub.

Docker Hub does not have access tokens that you can use to access your account, so we are going to need to use our own username/password to log in on the Docker Hub Registry. This is generally done by running:

```bash {promptUser: jcm}{prompHost: dev.localhost}
docker login -u "username" -p "password"
```

However, having your credentials in clear text like that is a bad practice because it can expose your password. We need to create new [CircleCI environment variables](https://circleci.com/docs/2.0/env-vars) with our username and password. There are multiple ways to do that in CircleCI, but if multiple projects are going to push images to Docker Hub, the recommended way is to use [Contexts](https://circleci.com/docs/2.0/contexts/). Otherwise, we can set them directly in the project settings. For this article we are going with the latter method.

After setting the environment variables `DOCKERHUB_USERNAME` and `DOCKERHUB_PASS`, let’s create our job:

```yaml
version: 2
jobs:
  build:
    environment:
      IMAGE_NAME: jonathancardoso/building-on-ci
    docker:
      - image: circleci/buildpack-deps:stretch
    steps:
      - checkout
      - setup_remote_docker
      - run:
          name: Build Docker image
          command: docker build -t $IMAGE_NAME:latest .
  publish-latest:
    environment:
      IMAGE_NAME: building-on-ci
    docker:
      - image: circleci/buildpack-deps:stretch
    steps:
      - setup_remote_docker
      - run:
          name: Publish Docker Image to Docker Hub
          command: |
            echo "$DOCKERHUB_PASS" | docker login -u "$DOCKERHUB_USERNAME" --password-stdin
            docker push $IMAGE_NAME:latest
workflows:
  version: 2
  build-master:
    jobs:
      - build:
          filters:
            branches:
              only: master
      - publish-latest:
          requires:
            - build
          filters:
            branches:
              only: master
```

We added a new `publish-latest` job to the `build-master` workflow. This job tries to push the image we just built to Docker Hub. However, if we commit that change and check the build log, we will see that it fails because Docker cannot find the image `jonathancardoso/building-on-ci`.

<!-- TODO: Try to find the image that should be here: https://circleci.com/workflow-run/6924a584-81be-4a31-bfbc-72225d12d256 -->

This happens because the jobs in a workflow are isolated from each other, the image we built on the `build` job is not available to `publish-latest`.

Note the duplication we have in our configuration file. We are repeating ourselves two times with the environment variable `IMAGE_NAME` definition and the Docker image that is going to be used to run our jobs.

One way we could use to solve the duplication issue is by using YAML anchors. However, CircleCI has evolved, and with version 2.1, we can now reuse some configurations directly by specifying a reusable executor. At the top of the file we are going to change the version from 2 to 2.1 and add a new `executors` key:

```yaml
version: 2.1
executors:
  docker-publisher:
    environment:
      IMAGE_NAME: building-on-ci
    docker:
      - image: circleci/buildpack-deps:stretch
```

Now on each job, instead of declaring `docker` and `environment` keys, we are going to specify a single `executor` key:

```yaml
# ...
jobs:
  build:
    executor: docker-publisher
    # ...
  publish-latest:
    executor: docker-publisher
    # ...
```

Duplication resolved. Time to fix the issue with our Docker image not being available on the `publish-latest` job. We are going to use [Workflows’ workspaces](https://circleci.com/docs/2.0/workflows/#using-workspaces-to-share-data-among-jobs) to share the image between the two jobs.

Let’s add a new run step at the end of the `build` job. This run step is going to save the image as a tar archive:

```yaml
# ...
- run:
    name: Archive Docker image
    command: docker save -o image.tar $IMAGE_NAME
# ...
```

Now, we can persist that file on the workflow workspace by adding another step called `persist_to_workspace`:

```yaml
# ...
- run:
    name: Archive Docker image
    command: docker save -o image.tar $IMAGE_NAME
- persist_to_workspace:
    root: .
    paths:
      - ./image.tar
# ...
```

To retrieve the `image.tar` file on the `publish-latest` job, we are going to add a new step, `attach_workspace`, before the others:

```yaml
# ...
steps:
  - attach_workspace:
      at: /tmp/workspace
  # ...
```

And load our archived image with `docker load` just before we try to push it to the Docker Hub registry:

```yaml
# ...
- run:
    name: Load archived Docker image
    command: docker load -i /tmp/workspace/image.tar
# ...
```

Our full configuration file looks like this:

```yaml
version: 2.1
executors:
  docker-publisher:
    environment:
      IMAGE_NAME: jonathancardoso/building-on-ci
    docker:
      - image: circleci/buildpack-deps:stretch
jobs:
  build:
    executor: docker-publisher
    steps:
      - checkout
      - setup_remote_docker
      - run:
          name: Build Docker image
          command: |
            docker build -t $IMAGE_NAME:latest .
      - run:
          name: Archive Docker image
          command: docker save -o image.tar $IMAGE_NAME
      - persist_to_workspace:
          root: .
          paths:
            - ./image.tar
  publish-latest:
    executor: docker-publisher
    steps:
      - attach_workspace:
          at: /tmp/workspace
      - setup_remote_docker
      - run:
          name: Load archived Docker image
          command: docker load -i /tmp/workspace/image.tar
      - run:
          name: Publish Docker Image to Docker Hub
          command: |
            echo "$DOCKERHUB_PASS" | docker login -u "$DOCKERHUB_USERNAME" --password-stdin
            docker push $IMAGE_NAME:latest
workflows:
  version: 2
  build-master:
    jobs:
      - build:
          filters:
            branches:
              only: master
      - publish-latest:
          requires:
            - build
          filters:
            branches:
              only: master
```

Everything should be green now!

Now, we can retrieve and run our image from the Docker Hub registry:

```bash {promptUser: jcm}{prompHost: dev.localhost}{outputLines: 2-7}
docker run jonathancardoso/building-on-ci "Workflows are awesome!"
Unable to find image 'jonathancardoso/building-on-ci:latest' locally
latest: Pulling from jonathancardoso/building-on-ci
4fe2ade4980c: Already exists
Digest: sha256:f719ca403b0fc6a5214823c61c750a5e48ce5809a24b882b3a45d6d119870366
Status: Downloaded newer image for jonathancardoso/building-on-ci:latest
Workflows are awesome!
```

## Publishing Git tags as Docker image tags on Docker Hub

Depending on an image with `latest` tag can [easily cause confusion](https://vsupalov.com/docker-latest-tag/) since we don’t have control over which version of the image we are running. The recommended way is to use a specific tag.

Suppose we are going to use Git tags to release new versions of our Docker image, and we want CircleCI to publish our image with each Git tag as an image tag on Docker Hub. Here is how we can do it.

First, we are going to add a new workflow, `build-tags`:

```yaml
# ...
build-tags:
  jobs:
    - build:
        filters:
          tags:
            only: /^v.*/
          branches:
            ignore: /.*/
    - publish-tag:
        requires:
          - build
        filters:
          tags:
            only: /^v.*/
          branches:
            ignore: /.*/
```

Both jobs share the same filters, which basically say that they must run for every tag that starts with `v` and should not execute for branches.

The `build` job is the same (we can reuse jobs between workflows), but the `publish-tag` job will look like the following:

```yaml
# ...
publish-tag:
  executor: docker-publisher
  steps:
    - attach_workspace:
        at: /tmp/workspace
    - setup_remote_docker
    - run:
        name: Load archived Docker image
        command: docker load -i /tmp/workspace/image.tar
    - run:
        name: Publish Docker Image to Docker Hub
        command: |
          echo "$DOCKERHUB_PASS" | docker login -u "$DOCKERHUB_USERNAME" --password-stdin
          IMAGE_TAG=${CIRCLE_TAG/v/''}
          docker tag $IMAGE_NAME:latest $IMAGE_NAME:$IMAGE_TAG
          docker push $IMAGE_NAME:latest
          docker push $IMAGE_NAME:$IMAGE_TAG

# ...
```

The difference between this job and `publish-latest` is that this job uses an environment variable set automatically by CircleCI called `CIRCLE_TAG`. We retrieve the value and remove the `v` prefix, e.g., `v0.0.1` becomes `0.0.1`. We then proceed to tag our image with that version and push it to the Docker Hub Registry. We also make sure to push the `latest` tag, too, so that both are kept in sync. If we commit a tag we can see it working:

<!-- TODO: Try to find the image that should be here: https://circleci.com/workflow-run/ecdfbb3f-b7f6-41b6-9f56-147496791736 -->

And if we access the Docker Hub page for the image, we can see the tag there:

<!-- TODO: Try to find the image that should be here: https://hub.docker.com/r/jonathancardoso/building-on-ci/tags/ -->

Now, we can run our image using our tag:

```bash {promptUser: jcm}{prompHost: dev.localhost}{outputLines: 2-7}
docker run jonathancardoso/building-on-ci:0.0.1 "Tags are working!"
Unable to find image 'jonathancardoso/building-on-ci:0.0.1' locally
0.0.1: Pulling from jonathancardoso/building-on-ci
4fe2ade4980c: Already exists
Digest: sha256:1a3a6c74860832704df55acdcbd875f662957d757d69fa340a48b41b890469bc
Status: Downloaded newer image for jonathancardoso/building-on-ci:0.0.1
Tags are working!
```

## Automatic image tags for each build

What if we have an image that we don’t use frequently or one that we don’t want to use git tags for? An image that we want to have strict control over which version we are using, so we can’t rely on the `latest` tag?

CircleCI allow us to do exactly that: it exposes an environment variable called `CIRCLE_BUILD_NUM` that is an ever-increasing number. Using it, we can let CircleCI publish a new version of the image for every build. Let’s modify our `publish-latest` job to do exactly that:

```yaml
# ...
- run:
    name: Publish Docker Image to Docker Hub
    command: |
      echo "$DOCKERHUB_PASS" | docker login -u "$DOCKERHUB_USERNAME" --password-stdin
      IMAGE_TAG="0.0.${CIRCLE_BUILD_NUM}"
      docker tag $IMAGE_NAME:latest $IMAGE_NAME:$IMAGE_TAG
      docker push $IMAGE_NAME:latest
      docker push $IMAGE_NAME:$IMAGE_TAG

# ...
```

We are using `CIRCLE_BUILD_NUM` to create the image tag and publishing it alongside the `latest` tag to Docker Hub Registry. If we commit that to master and wait for the workflow to finish, we can see that it was published:

<!-- TODO: Try to find the image that should be here: https://hub.docker.com/r/jonathancardoso/building-on-ci/tags/ -->

## Summary

These versioning techniques are just building blocks. You can make tagging the versions of your image as complex or as simple as you want. You could even use this knowledge to upload an image to your own private registry, instead of Docker Hub, for specific tags.

The repository used while writing this article is available on GitHub: https://github.com/JCMais/docker-building-on-ci.
