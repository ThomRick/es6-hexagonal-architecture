import {WebService} from '../services/web.service';

export class WebController {
  constructor(service = new WebService()) {
    console.log(`${ WebController.name } constructor`);
    this._service = service;
  }

  getAll(request, response) {
    console.log(`${ WebController.name }.${ WebController.prototype.getAll.name } receive a request`);
    return this._service.getAll()
      .then(data => response.status(200).json(data));
  }

  getAllAsync(request, response) {
    console.log(`${ WebController.name }.${ WebController.prototype.getAllAsync.name } receive a request`);
    return this._service.getAllAsync()
      .then(data => response.status(200).json(data));
  }
}