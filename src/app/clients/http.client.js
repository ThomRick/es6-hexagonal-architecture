export class HttpClient {
  constructor() {
    console.log(`${ HttpClient.name } constructor`);
  }

  request(options) {
    return Promise.resolve(
      {
        message: `Hello world from ${ HttpClient.name }.${ HttpClient.prototype.request.name }`
      }
    );
  }
}