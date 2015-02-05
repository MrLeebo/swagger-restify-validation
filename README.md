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

You can now use `x-restify-validation` on your Swagger Operation objects to specify your node-restify-validation rules.
```
swagger: "2.0",
paths: {
  "/api/resource": {
    get: {
      operationId: "resource",
      parameters: [
        {name: "str", type: "string", in: "query"}
      ]
      "x-restify-validation": {
        str: {
          isAlpha: true
        }
      }
    }
  }
}

```
