export class ApiDiscoveryRepository {
  constructor() {
    this._map = {};
  }

  get() {
    return this._map;
  }

  put(name, url) {
    this._map[name] = url;
  }
}