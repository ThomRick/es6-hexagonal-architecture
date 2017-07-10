'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _user = require('../repositories/user.repository');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserService = exports.UserService = function () {
  function UserService() {
    var repository = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _user.UserRepository();

    _classCallCheck(this, UserService);

    console.log(UserService.name + ' constructor');
    this._repository = repository;
  }

  _createClass(UserService, [{
    key: 'getAll',
    value: function getAll() {
      return this._repository.getAll();
    }
  }]);

  return UserService;
}();