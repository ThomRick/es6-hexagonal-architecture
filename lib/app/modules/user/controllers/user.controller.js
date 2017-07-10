'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserController = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _user = require('../services/user.service');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserController = exports.UserController = function () {
  function UserController() {
    var service = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _user.UserService();

    _classCallCheck(this, UserController);

    console.log(UserController.name + ' constructor');
    this._service = service;
  }

  _createClass(UserController, [{
    key: 'getAll',
    value: function getAll(request, response) {
      console.log(UserController.name + '.' + UserController.prototype.getAll.name + ' receive a request');
      this._service.getAll().then(function (data) {
        return response.status(200).json(data);
      });
    }
  }]);

  return UserController;
}();