# Gulp AngularJS Full-Stack generator [![Build Status](https://travis-ci.org/DaftMonk/generator-angular-fullstack.svg?branch=master)](http://travis-ci.org/DaftMonk/generator-angular-fullstack)

> Currently Under Development.

> Yeoman generator for creating Service Oriented Applications using a multitude of technologies!!

The purpose of a generator for service oriented architecture (SOA), is to help teams immediately set up their environment. Currently you are able to generator multiple servers by running yo soa:server [name], Which will generate a server in the servers/ directory. It will also generate and angular.factory(), that makes the connection. 

## Following Best Practices for Angular
* This Generator generates code that strictly follows this style guide.
* @John Papa's Best Practices: https://github.com/johnpapa/angularjs-styleguide


## Features
* Angular Full-Stack App.
* Gulp task runner.
* Server API's for things and users.
* Data Base option using MongoDB.
* Full Server Authentication using Passport.
* Clean client & server side App Architecture.

## Coming Soon
* Run yo soa:paths to set the default directory paths.
* initialize a git repository every time a client or server is made.
* create multiple clients - choices [ ionic, oxford, bootstrap ]
* allow options for databases [ MongoDB, MySQL, PostgresSql, Neo4j, Firebase ]
* allow for server framework of choice [ sails, express ]
* allow for ECMA Script 6 option

## Example project

Source code: https://github.com/JoelCoxOKC/angular-soa-seed

## Usage

Install `generator-soa`:
```
npm install -g generator-soa
```

Make a new directory, and `cd` into it:
```
mkdir my-new-project && cd $_
```

Run `yo soa`, optionally passing an app name:
```
yo soa [app-name]
```

Run `gulp` for building, `gulp serve` for preview, and `gulp dist` for a preview of the built app.

## Prerequisites

* MongoDB - Download and Install [MongoDB](http://www.mongodb.org/downloads) - If you plan on scaffolding your project with mongoose, you'll need mongoDB to be installed and have the `mongod` process running.

## Supported Configurations

**Client**

* Scripts: `JavaScript`, `CoffeeScript`
* Markup:  `HTML`, `Jade`
* Stylesheets: `CSS`, `Stylus`, `Sass`, `Less`,
* Angular Routers: `ui-router`

**Server**

* Database: `None`, `MongoDB`
* Database: coming soon - `PostgreSql`, `MySql`,`Neo4J`
* Authentication boilerplate: `Yes`, `No`
* oAuth integrations: `Facebook` `Twitter` `Google`
* Socket.io integration: `Yes`, `No`

## Injection 
* Currently not working Only in run time.
* Must re-run gulp for injection.
* Coming in version 1.1.7.

A gulp task looks for new files in your `client/app` and `client/components` folder and automatically injects them in the appropriate places based on an injection block.

* `less` files into `client/styles/app.less`
* `scss` files into `client/app.scss` -- Currently has Bugs. 
* `stylus` files into `client/app.styl`
* `css` files into `client/index.html`
* `js` files into `client/index.html`
* `coffeescript` temp `js` files into `client/index.html`

## Generators

Available generators:

* App
    - [soa](#app) (aka [soa:app](#app))
* Server Side
    - [soa:endpoint](#endpoint) <-- currently has bug issues
* Client Side
    - [soa:route](#route)
    - [soa:controller](#controller)
    - [soa:filter](#filter)
    - [soa:directive](#directive)
    - [soa:service](#service)
    - [soa:provider](#service)
    - [soa:factory](#service)
    - [soa:decorator](#decorator)
    - [soa:model](#model) <-- angular factory that communicates to the server-api
* Deployment
    - [soa:openshift](#openshift) <-- Coming Soon
    - [soa:heroku](#heroku) <-- Coming Soon

### App
Sets up a new AngularJS + Express app, generating all the boilerplate you need to get started.

Example:
```bash
yo soa
```

### Endpoint
Generates a new API endpoint.


Example:
```bash
yo soa:endpoint message
[?] What will the url of your endpoint to be? /api/messages
```

Produces:

    servers/server/api/message/index.js
    servers/server/api/message/message.spec.js
    servers/server/api/message/message.controller.js
    servers/server/api/message/message.model.js  (optional)
    servers/server/api/message/message.socket.js (optional)

### Route
Generates a new route.

Example:
```bash
yo soa:route myroute
[?] Where would you like to create this route? client/app/
[?] What will the url of your route be? /myroute
```

Produces:

    client/app/myroute/myroute.js
    client/app/myroute/myroute.controller.js
    client/app/myroute/myroute.controller.spec.js
    client/app/myroute/myroute.html
    client/app/myroute/myroute.scss


### Controller
Generates a controller.

Example:
```bash
yo soa:controller user
[?] Where would you like to create this controller? client/app/
```

Produces:

    client/app/user/user.controller.js
    client/app/user/user.controller.spec.js

### Directive
Generates a directive.

Example:
```bash
yo soa:directive myDirective
[?] Where would you like to create this directive? client/app/
[?] Does this directive need an external html file? Yes
```

Produces:

    client/app/myDirective/myDirective.directive.js
    client/app/myDirective/myDirective.directive.spec.js
    client/app/myDirective/myDirective.html
    client/app/myDirective/myDirective.scss

**Simple directive without an html file**

Example:
```bash
yo soa:directive simple
[?] Where would you like to create this directive? client/app/
[?] Does this directive need an external html file? No
```

Produces:

    client/app/simple/simple.directive.js
    client/app/simple/simple.directive.spec.js

### Filter
Generates a filter.

Example:
```bash
yo soa:filter myFilter
[?] Where would you like to create this filter? client/app/
```

Produces:

    client/app/myFilter/myFilter.filter.js
    client/app/myFilter/myFilter.filter.spec.js

### Service
Generates an AngularJS service.

Example:
```bash
yo soa:service myService
[?] Where would you like to create this service? client/app/
```

Produces:

    client/app/myService/myService.service.js
    client/app/myService/myService.service.spec.js


You can also do `yo angular:factory` and `yo angular:provider` for other types of services.

### Decorator
Generates an AngularJS service decorator.

Example:
```bash
yo soa:decorator serviceName
[?] Where would you like to create this decorator? client/app/
```

Produces

    client/app/serviceName/serviceName.decorator.js

###Openshift

Deploying to OpenShift can be done in just a few steps:

## Bower Components

The following packages are always installed by the [app](#app) generator:

* angular
* angular-cookies
* angular-mocks
* angular-resource
* angular-sanitize
* angular-scenario
* Restangular
* es5-shim
* font-awesome
* json3
* jquery
* lodash

These packages are installed optionally depending on your configuration:

* angular-route
* angular-ui-router
* angular-socket-io
* angular-bootstrap
* bootstrap

All of these can be updated with `bower update` as new versions are released.

## Configuration
Yeoman generated projects can be further tweaked according to your needs by modifying project files appropriately.

A `.yo-rc` file is generated for helping you copy configuration across projects, and to allow you to keep track of your settings. You can change this as you see fit.

## Testing

Running `gulp test` will run the client and server unit tests with karma and mocha.

Coming Soon -- Use `gulp test:server` to only run server tests.

Coming Soon -- Use `gulp test:client` to only run client tests.

**Protractor tests**

To setup protractor e2e tests, you must first run

`npm run update-webdriver`

Coming Soon -- Use `gulp test:e2e` to have protractor go through tests located in the `e2e` folder.

## Environment Variables

Keeping your app secrets and other sensitive information in source control isn't a good idea. To have grunt launch your app with specific environment variables, add them to the git ignored environment config file: `server/config/local.env.js`.

## Project Structure

Overview

    ├── client
    │   ├── app                 - All of our app specific components go in here
    │   ├── assets              - Custom assets: fonts, images, etc…
    │   ├── components          - Our reusable components, non-specific to to our app
    │
    ├── e2e                     - Our protractor end to end tests
    │
    └── server
        ├── api                 - Our apps server api
        ├── auth                - For handling authentication with different auth strategies
        ├── components          - Our reusable or app-wide components
        ├── config              - Where we do the bulk of our apps configuration
        │   └── local.env.js    - Keep our environment variables out of source control
        │   └── environment     - Configuration specific to the node environment
        └── views               - Server rendered views

An example client component in `client/app`

    factories
     │    ├── auth                     - Auth Factory.
     │    ├── authInterceptor    - authInterceptor for authorized headers.
     │    ├── logger                  - Toaster notifications. <-- Not Working
     │    └── storage                - Local Storage for authentication tokens.
     │
    models
     ├── user
     │    ├── user.model       - Factory for dealing directly with the sever api.
     │    └── user.model.spec  - Test Spec for user.model
     ├── thing
     │    ├── thing.model      - Factory for dealing directly with the sever api.
     │    └── thing.model.spec - Test Spec for thing.model
     │    
    states          - All ui.router States for the app
     ├── account
     │    ├── login
     │    │    ├── login.controller
     │    │    └── login.view
     │    │    
     │    ├── signup
     │    │    ├── signup.controller
     │    │    └── signup.view
     │    │    
     │    ├── settings
     │    │    ├── settings.controller
     │    │    └── settings.view
     │    │
     │    └── account.routes - routes for login/signup/settings
     │
     ├── admin
     │    ├── admin.controller
     │    ├── admin.view
     │    └── admin.routes - routes for admin
     │
     ├── main
     │    ├── main.controller
     │    ├── main.controller.spec
     │    ├── main.view
     │    └── main.routes - routes for admin
     │
     └── app.js - Main Angular.module

## Contribute

See the [contributing docs](https://github.com/DaftMonk/generator-angular-fullstack/blob/master/contributing.md)

This project has 2 main branches: `master` and `canary`. The `master` branch is where the current stable code lives and should be used for production setups. The `canary` branch is the main development branch, this is where PRs should be submitted to (backport fixes may be applied to `master`).

By seperating the current stable code from the cutting-edge development we hope to provide a stable and efficient workflow for users and developers alike.

When submitting an issue, please follow the [guidelines](https://github.com/yeoman/yeoman/blob/master/contributing.md#issue-submission). Especially important is to make sure Yeoman is up-to-date, and providing the command or commands that cause the issue.

When submitting a PR, make sure that the commit messages match the [AngularJS conventions](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/).

When submitting a bugfix, try to write a test that exposes the bug and fails before applying your fix. Submit the test alongside the fix.

When submitting a new feature, add tests that cover the feature.

See the `travis.yml` for configuration required to run tests.

## License

[BSD license](http://opensource.org/licenses/bsd-license.php)
