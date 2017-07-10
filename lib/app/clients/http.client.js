"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HttpClient = exports.HttpClient = function () {
  function HttpClient() {
    _classCallCheck(this, HttpClient);

    console.log(HttpClient.name + " constructor");
  }

  _createClass(HttpClient, [{
    key: "request",
    value: function request(options) {
      return Promise.resolve({
        message: "Hello world from " + HttpClient.name + "." + HttpClient.prototype.request.name
      });
    }
  }]);

  return HttpClient;
}();