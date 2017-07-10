'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ApiDiscoveryService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _apiDiscovery = require('../repositories/api-discovery.repository');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ApiDiscoveryService = exports.ApiDiscoveryService = function () {
  function ApiDiscoveryService() {
    var repository = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _apiDiscovery.ApiDiscoveryRepository();

    _classCallCheck(this, ApiDiscoveryService);

    this._repository = repository;
  }

  _createClass(ApiDiscoveryService, [{
    key: 'get',
    value: function get() {
      return this._repository.get();
    }
  }, {
    key: 'put',
    value: function put(name, url) {
      this._repository.put(name, url);
    }
  }], [{
    key: 'getInstance',
    value: function getInstance() {
      if (this._instance === undefined || this._instance === null) this._instance = this._createInstance();
      return this._instance;
    }
  }, {
    key: '_createInstance',
    value: function _createInstance() {
      return new ApiDiscoveryService();
    }
  }]);

  return ApiDiscoveryService;
}();