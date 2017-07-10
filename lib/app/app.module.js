'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppModule = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _apiDiscovery = require('./modules/api-discovery/api-discovery.module');

var _user = require('./modules/user/user.module');

var _web = require('./modules/web/web.module');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AppModule = exports.AppModule = function () {
  function AppModule() {
    var apiDiscoveryModule = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _apiDiscovery.ApiDiscoveryModule();
    var webModule = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _web.WebModule();
    var userModule = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new _user.UserModule();

    _classCallCheck(this, AppModule);

    console.log(AppModule.name + ' constructor');
    this._apiDiscoveryModule = apiDiscoveryModule;
    this._webModule = webModule;
    this._userModule = userModule;
  }

  _createClass(AppModule, [{
    key: 'deployOn',
    value: function deployOn(server) {
      this._apiDiscoveryModule.deployOn(server);
      this._webModule.deployOn(server);
      this._userModule.deployOn(server);
    }
  }]);

  return AppModule;
}();