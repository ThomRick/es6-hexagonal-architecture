'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ApiDiscoveryController = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _apiDiscovery = require('../services/api-discovery.service');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ApiDiscoveryController = exports.ApiDiscoveryController = function () {
  function ApiDiscoveryController() {
    var service = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _apiDiscovery.ApiDiscoveryService.getInstance();

    _classCallCheck(this, ApiDiscoveryController);

    this._service = service;
  }

  _createClass(ApiDiscoveryController, [{
    key: 'get',
    value: function get(request, response) {
      return response.status(200).json(this._service.get());
    }
  }]);

  return ApiDiscoveryController;
}();