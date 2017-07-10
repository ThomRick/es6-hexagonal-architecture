import {WebRepository} from '../repositories/web.repository';
import {AsyncWebRepository} from '../repositories/async-web.repository';

export class WebService {
  constructor(
    webRepository = new WebRepository(),
    asyncWebRepository = new AsyncWebRepository()
  ) {
    console.log(`${ WebService.name } constructor`);
    this._repository = webRepository;
    this._asyncWebRepository = asyncWebRepository;
  }

  getAll() {
    return this._repository.getAll();
  }

  getAllAsync() {
    return this._asyncWebRepository.getAllAsync();
  }
}