import {WebController} from '../controllers/web.controller';
import * as express from 'express';
import {ApiDiscoveryService} from '../../api-discovery/services/api-discovery.service';

export class WebRouter {
  constructor(
    apiDiscoveryService = ApiDiscoveryService.getInstance(),
    controller = new WebController()
  ) {
    console.log(`${ WebRouter.name } constructor`);
    this._apiDiscoveryService = apiDiscoveryService;
    this._controller = controller;
  }

  build() {
    console.log(`Build ${ WebRouter.name } router...`);
    const router = express.Router();

    this._apiDiscoveryService.put('getWebData', '/api/web/data');
    router.get('/api/web/data', this._controller.getAll.bind(this._controller));

    this._apiDiscoveryService.put('getWebDataAsync', '/api/web/data/async');
    router.get('/api/web/data/async', this._controller.getAllAsync.bind(this._controller));

    return router;
  }
}