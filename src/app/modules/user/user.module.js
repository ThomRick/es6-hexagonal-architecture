import {UserRouter} from './routers/user.router';

export class UserModule {
  constructor(userRouter = new UserRouter()) {
    console.log(`${ UserModule.name } constructor`);
    this._userRouter = userRouter;
  }

  deployOn(server) {
    server.use(this._userRouter.build());
  }
}