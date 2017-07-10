import {WebController} from '../controllers/web.controller';
import * as express from 'express';

export class WebRouter {
  constructor(controller = new WebController()) {
    console.log(`${ WebRouter.name } constructor`);
    this._controller = controller;
  }

  build() {
    console.log(`Build ${ WebRouter.name } router...`);
    const router = express.Router();
    router.get('/api/web/data', this._controller.getAll.bind(this._controller));
    router.get('/api/web/async/data', this._controller.getAllAsync.bind(this._controller));
    return router;
  }
}