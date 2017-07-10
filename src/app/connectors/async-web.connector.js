import {AsyncHttpClient} from '../clients/async-http.client';

export class AsyncWebConnector {
  static getInstance() {
    console.log(`Require the ${ AsyncHttpClient.name } instance`);
    if (this._instance === undefined || this._instance === null)
      this._instance = this._createInstance();
    return this._instance;
  }

  static _createInstance() {
    console.log(`Create a ${ AsyncHttpClient.name } instance`);
    return Promise.resolve(new AsyncHttpClient('the-key'));
  }
}