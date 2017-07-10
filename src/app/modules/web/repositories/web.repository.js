import {WebConnector} from '../../../connectors/web.connector';

export class WebRepository {
  constructor(connector = WebConnector.getInstance()) {
    console.log(`${ WebRepository.name } constructor`);
    this._connector = connector;
  }

  getAll() {
    return this._connector.request();
  }
}