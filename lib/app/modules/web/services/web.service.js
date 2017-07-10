'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _web = require('../repositories/web.repository');

var _asyncWeb = require('../repositories/async-web.repository');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WebService = exports.WebService = function () {
  function WebService() {
    var webRepository = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _web.WebRepository();
    var asyncWebRepository = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _asyncWeb.AsyncWebRepository();

    _classCallCheck(this, WebService);

    console.log(WebService.name + ' constructor');
    this._repository = webRepository;
    this._asyncWebRepository = asyncWebRepository;
  }

  _createClass(WebService, [{
    key: 'getAll',
    value: function getAll() {
      return this._repository.getAll();
    }
  }, {
    key: 'getAllAsync',
    value: function getAllAsync() {
      return this._asyncWebRepository.getAllAsync();
    }
  }]);

  return WebService;
}();