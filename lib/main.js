'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainClass = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _app = require('./app/app.module');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MainClass = exports.MainClass = function () {
  function MainClass() {
    _classCallCheck(this, MainClass);
  }

  _createClass(MainClass, null, [{
    key: 'main',
    value: function main() {
      var server = (0, _express2.default)();
      new _app.AppModule().deployOn(server);
      server.listen(8080, function () {
        console.log('Application server listen on port 8080...');
        console.log('= = = = = = = = = = = = = = = = = = = = =');
      });
    }
  }]);

  return MainClass;
}();