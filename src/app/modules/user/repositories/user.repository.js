import {AsyncWebConnector} from '../../../connectors/async-web.connector';

export class UserRepository {
  constructor(connector = AsyncWebConnector.getInstance()) {
    console.log(`${ UserRepository.name } constructor`);
    this._connector = connector;
  }

  getAll() {
    return this._connector.then(httpClient => httpClient.request());
  }
}