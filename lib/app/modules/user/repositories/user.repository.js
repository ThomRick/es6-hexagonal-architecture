'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserRepository = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _asyncWeb = require('../../../connectors/async-web.connector');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserRepository = exports.UserRepository = function () {
  function UserRepository() {
    var connector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _asyncWeb.AsyncWebConnector.getInstance();

    _classCallCheck(this, UserRepository);

    console.log(UserRepository.name + ' constructor');
    this._connector = connector;
  }

  _createClass(UserRepository, [{
    key: 'getAll',
    value: function getAll() {
      return this._connector.then(function (httpClient) {
        return httpClient.request();
      });
    }
  }]);

  return UserRepository;
}();