var _ = require('lodash');
var restifyValidation = require('node-restify-validation');

var defaultOptions = {
  errorsAsArray: true
};

module.exports = function(options) {
  options = _.extend(defaultOptions, options);

  return function(req, res, next) {

    var validationModel = req.swagger && req.swagger.operation ? req.swagger.operation['x-restify-validation'] : undefined;
    if (!validationModel) {
      return next();
    }

    var errors = restifyValidation.validation.process(validationModel, req, options);
    if (errors && (options.errorsAsArray && errors.length > 0) || (!options.errorsAsArray && _.keys(errors).length > 0)) {
      return restifyValidation.error.handle(errors, req, res, options, next);
    }

    next();
  };
};
