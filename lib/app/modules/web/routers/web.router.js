'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebRouter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _web = require('../controllers/web.controller');

var _express = require('express');

var express = _interopRequireWildcard(_express);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WebRouter = exports.WebRouter = function () {
  function WebRouter() {
    var controller = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _web.WebController();

    _classCallCheck(this, WebRouter);

    console.log(WebRouter.name + ' constructor');
    this._controller = controller;
  }

  _createClass(WebRouter, [{
    key: 'build',
    value: function build() {
      console.log('Build ' + WebRouter.name + ' router...');
      var router = express.Router();
      router.get('/api/web/data', this._controller.getAll.bind(this._controller));
      router.get('/api/web/async/data', this._controller.getAllAsync.bind(this._controller));
      return router;
    }
  }]);

  return WebRouter;
}();