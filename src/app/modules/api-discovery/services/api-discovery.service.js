import {ApiDiscoveryRepository} from '../repositories/api-discovery.repository';

export class ApiDiscoveryService {
  constructor(repository = new ApiDiscoveryRepository()) {
    this._repository = repository;
  }

  static getInstance() {
    if (this._instance === undefined || this._instance === null)
      this._instance = this._createInstance();
    return this._instance;
  }

  static _createInstance() {
    return new ApiDiscoveryService();
  }

  get() {
    return this._repository.get();
  }

  put(name, url) {
    this._repository.put(name, url);
  }
}