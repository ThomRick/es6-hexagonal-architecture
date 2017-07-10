import {WebRouter} from './routers/web.router';

export class WebModule {
  constructor(router = new WebRouter()) {
    console.log(`${ WebModule.name } constructor`);
    this._router = router;
  }

  deployOn(server) {
    console.log(`Deploy ${ WebModule.name } on server...`);
    server.use(this._router.build());
  }
}