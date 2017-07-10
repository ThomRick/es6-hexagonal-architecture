import {ApiDiscoveryRouter} from './routers/api-discovery.router';

export class ApiDiscoveryModule {
  constructor(router = new ApiDiscoveryRouter()) {
    this._router = router;
  }

  deployOn(server) {
    server.use(this._router.build());
  }
}