'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserModule = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _user = require('./routers/user.router');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserModule = exports.UserModule = function () {
  function UserModule() {
    var userRouter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _user.UserRouter();

    _classCallCheck(this, UserModule);

    console.log(UserModule.name + ' constructor');
    this._userRouter = userRouter;
  }

  _createClass(UserModule, [{
    key: 'deployOn',
    value: function deployOn(server) {
      server.use(this._userRouter.build());
    }
  }]);

  return UserModule;
}();