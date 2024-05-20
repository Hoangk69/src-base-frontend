import {AuthorizationModel} from './models/authorization.model';

export class CustomStorage {
  static get currentUser(): AuthorizationModel {
    const json = localStorage.getItem('currentUser');
    return new AuthorizationModel(JSON.parse(json));
  }

  static set currentUser(value: AuthorizationModel) {
    localStorage.setItem('currentUser', JSON.stringify(value));
  }
}
