import {ApiDiscoveryService} from '../services/api-discovery.service';

export class ApiDiscoveryController {
  constructor(service = ApiDiscoveryService.getInstance()) {
    this._service = service;
  }

  get(request, response) {
    return response.status(200).json(this._service.get());
  }
}