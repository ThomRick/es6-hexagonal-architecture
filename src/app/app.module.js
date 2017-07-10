import {WebModule} from '../../lib/app/modules/web/web.module';
import {UserModule} from './modules/user/user.module';

export class AppModule {
  constructor(
    webModule = new WebModule(),
    userModule = new UserModule()
  ) {
    console.log(`${ AppModule.name } constructor`);
    this._webModule = webModule;
    this._userModule = userModule;
  }

  deployOn(server) {
    this._webModule.deployOn(server);
    this._userModule.deployOn(server);
  }
}