export class AsyncHttpClient {
  constructor(key) {
    console.log(`${ AsyncHttpClient.name } constructor`);
    this._key = key;
  }

  request(options) {
    return Promise.resolve(
      {
        message: `Hello world from ${ AsyncHttpClient.name }.${ AsyncHttpClient.prototype.request.name }`,
        key: this._key
      }
    );
  }
}