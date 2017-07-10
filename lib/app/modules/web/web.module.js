'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebModule = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _web = require('./routers/web.router');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WebModule = exports.WebModule = function () {
  function WebModule() {
    var router = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _web.WebRouter();

    _classCallCheck(this, WebModule);

    console.log(WebModule.name + ' constructor');
    this._router = router;
  }

  _createClass(WebModule, [{
    key: 'deployOn',
    value: function deployOn(server) {
      console.log('Deploy ' + WebModule.name + ' on server...');
      server.use(this._router.build());
    }
  }]);

  return WebModule;
}();