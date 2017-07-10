import {UserService} from '../services/user.service';

export class UserController {
  constructor(service = new UserService()) {
    console.log(`${ UserController.name } constructor`);
    this._service = service;
  }

  getAll(request, response) {
    console.log(`${ UserController.name }.${ UserController.prototype.getAll.name } receive a request`);
    this._service.getAll()
      .then(data => response.status(200).json(data));
  }
}