import * as express from 'express';
import {ApiDiscoveryController} from '../controllers/api-discovery.controller';

export class ApiDiscoveryRouter {
  constructor(controller = new ApiDiscoveryController()) {
    this._controller = controller;
  }

  build() {
    const router = express.Router();
    router.get('/api', this._controller.get.bind(this._controller));
    return router;
  }
}