import * as express from 'express';
import {UserController} from '../controllers/user.controller';
import {ApiDiscoveryService} from '../../api-discovery/services/api-discovery.service';

export class UserRouter {
  constructor(
    apiDiscoveryService = ApiDiscoveryService.getInstance(),
    controller = new UserController()) {
    console.log(`${ UserRouter.name } constructor`);
    this._apiDiscoveryService = apiDiscoveryService;
    this._controller = controller;
  }

  build() {
    console.log(`Build ${ UserRouter.name } router...`);
    const router = express.Router();
    this._apiDiscoveryService.put('getUsers', '/api/users');
    router.get('/api/users', this._controller.getAll.bind(this._controller));
    return router;
  }
}