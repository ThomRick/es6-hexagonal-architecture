import {ApiDiscoveryModule} from './modules/api-discovery/api-discovery.module';
import {UserModule} from './modules/user/user.module';
import {WebModule} from './modules/web/web.module';

export class AppModule {
  constructor(
    apiDiscoveryModule = new ApiDiscoveryModule(),
    webModule = new WebModule(),
    userModule = new UserModule()
  ) {
    console.log(`${ AppModule.name } constructor`);
    this._apiDiscoveryModule = apiDiscoveryModule;
    this._webModule = webModule;
    this._userModule = userModule;
  }

  deployOn(server) {
    this._apiDiscoveryModule.deployOn(server);
    this._webModule.deployOn(server);
    this._userModule.deployOn(server);
  }
}