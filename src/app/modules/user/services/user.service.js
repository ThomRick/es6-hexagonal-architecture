import {UserRepository} from '../repositories/user.repository';

export class UserService {
  constructor(repository = new UserRepository()) {
    console.log(`${ UserService.name } constructor`);
    this._repository = repository;
  }

  getAll() {
    return this._repository.getAll();
  }
}