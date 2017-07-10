'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AsyncWebRepository = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _asyncWeb = require('../../../connectors/async-web.connector');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AsyncWebRepository = exports.AsyncWebRepository = function () {
  function AsyncWebRepository() {
    var connector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _asyncWeb.AsyncWebConnector.getInstance();

    _classCallCheck(this, AsyncWebRepository);

    console.log(_asyncWeb.AsyncWebConnector.name + ' constructor');
    this._connector = connector;
  }

  _createClass(AsyncWebRepository, [{
    key: 'getAllAsync',
    value: function getAllAsync() {
      return this._connector.then(function (httpClient) {
        return httpClient.request();
      });
    }
  }]);

  return AsyncWebRepository;
}();