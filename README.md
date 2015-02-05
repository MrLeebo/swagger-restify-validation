# swagger-restify-validation
============================
A middleware extension for swagger-tools that integrates with node-restify-validations

## Install
```
npm install swagger-restify-validation --save
```

## Usage

Require swagger-restify validation,

```
var restifyValidation = require('swagger-restify-validation');
```

Then include the middleware in your initializeMiddleware callback.
```
swaggerTools.initializeMiddleware(swaggerDoc, function(middleware) {
  app.use(middleware.swaggerMetadata());
  app.use(restifyValidation());

  // snip...
});
```
