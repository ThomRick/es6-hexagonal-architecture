'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebConnector = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _http = require('../clients/http.client');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WebConnector = exports.WebConnector = function () {
  function WebConnector() {
    _classCallCheck(this, WebConnector);
  }

  _createClass(WebConnector, null, [{
    key: 'getInstance',
    value: function getInstance() {
      console.log('Require the ' + _http.HttpClient.name + ' instance');
      if (this._instance === undefined || this._instance === null) this._instance = this._createInstance();
      return this._instance;
    }
  }, {
    key: '_createInstance',
    value: function _createInstance() {
      console.log('Create a ' + _http.HttpClient.name + ' instance');
      return new _http.HttpClient();
    }
  }]);

  return WebConnector;
}();