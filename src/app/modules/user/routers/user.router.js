import * as express from 'express';
import {UserController} from '../controllers/user.controller';

export class UserRouter {
  constructor(controller = new UserController()) {
    console.log(`${ UserRouter.name } constructor`);
    this._controller = controller;
  }

  build() {
    console.log(`Build ${ UserRouter.name } router...`);
    const router = express.Router();
    router.get('/api/users', this._controller.getAll.bind(this._controller));
    return router;
  }
}