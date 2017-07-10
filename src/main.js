import express from 'express';
import {AppModule} from '../lib/app/app.module';

export class MainClass {
  static main() {
    const server = express();
    new AppModule().deployOn(server);
    server.listen(8080, () => {
      console.log('Application server listen on port 8080...');
      console.log('= = = = = = = = = = = = = = = = = = = = =');
    });
  }
}