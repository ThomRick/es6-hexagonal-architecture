import {AsyncWebConnector} from '../../../connectors/async-web.connector';

export class AsyncWebRepository {
  constructor(connector = AsyncWebConnector.getInstance()) {
    console.log(`${ AsyncWebConnector.name } constructor`);
    this._connector = connector;
  }

  getAllAsync() {
    return this._connector.then(httpClient => httpClient.request());
  }
}