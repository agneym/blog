---
title: 'Create a Code Generating CLI'
date: '2018-12-26T22:12:03.284Z'
published: false
---

Today I would like to walk through the procedure to create a code generating CLI.

What is a _Code generating CLI_, you ask? You might have surely used one in your career, some of the examples being [create-react-app](https://facebook.github.io/create-react-app/docs/getting-started), [express-generator](https://expressjs.com/en/starter/generator.html), [vue-cli](https://cli.vuejs.org/guide/) or the amazing [ng-cli](https://cli.angular.io/).

All of these have a CLI interface that create a fully fledged application with the options passed to it. Today, we look to achieve something similar (but smaller) using the [Gluegun](https://infinitered.github.io/gluegun/) CLI building toolkit.

Gluegun defines itself as a delightful toolkit for building Node-powered CLIs. If this is your first time, then you can read on features and why you might want to use it from their docs [here](https://infinitered.github.io/gluegun/#/?id=gluegun). It is used in production by awesome tools like [AWS Amplify](https://github.com/aws-amplify/amplify-cli) and [Ignite CLI](https://github.com/infinitered/ignite).

Before we start on Gluegun, we need to take a quick recap of `ejs` that we will be using for templating.

```html
<!-- Substitutes h2 contents with user.name value -->
<h2><%= user.name %></h2>

<!-- Includes user/show.ejs file and supplies user to it -->
<%- include('user/show', {user: user}); %>

<!-- enters the unescaped value into the tag-->
<%- JSON.stringify(user) -%>
```

`ejs` is not just used for templating HTML strings, it can be used in any environment, it being JSON, Javascript or CSS. This is what we will use to generate our code according to the template.
