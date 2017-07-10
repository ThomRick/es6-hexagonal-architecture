"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AsyncHttpClient = exports.AsyncHttpClient = function () {
  function AsyncHttpClient(key) {
    _classCallCheck(this, AsyncHttpClient);

    console.log(AsyncHttpClient.name + " constructor");
    this._key = key;
  }

  _createClass(AsyncHttpClient, [{
    key: "request",
    value: function request(options) {
      return Promise.resolve({
        message: "Hello world from " + AsyncHttpClient.name + "." + AsyncHttpClient.prototype.request.name,
        key: this._key
      });
    }
  }]);

  return AsyncHttpClient;
}();