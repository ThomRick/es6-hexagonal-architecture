import {HttpClient} from '../clients/http.client';

export class WebConnector {
  static getInstance() {
    console.log(`Require the ${ HttpClient.name } instance`);
    if (this._instance === undefined || this._instance === null)
      this._instance = this._createInstance();
    return this._instance;
  }

  static _createInstance() {
    console.log(`Create a ${ HttpClient.name } instance`);
    return new HttpClient();
  }
}