'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebController = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _web = require('../services/web.service');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WebController = exports.WebController = function () {
  function WebController() {
    var service = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _web.WebService();

    _classCallCheck(this, WebController);

    console.log(WebController.name + ' constructor');
    this._service = service;
  }

  _createClass(WebController, [{
    key: 'getAll',
    value: function getAll(request, response) {
      console.log(WebController.name + '.' + WebController.prototype.getAll.name + ' receive a request');
      return this._service.getAll().then(function (data) {
        return response.status(200).json(data);
      });
    }
  }, {
    key: 'getAllAsync',
    value: function getAllAsync(request, response) {
      console.log(WebController.name + '.' + WebController.prototype.getAllAsync.name + ' receive a request');
      return this._service.getAllAsync().then(function (data) {
        return response.status(200).json(data);
      });
    }
  }]);

  return WebController;
}();