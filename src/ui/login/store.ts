import { action, observable } from 'mobx';
import { fromPromise, IPromiseBasedObservable } from 'mobx-utils';
import Router from 'next/router';
import { ILoginCredentials } from './types';
import { postLogin } from '../../mock-api/login'

export interface IAuthStore {
  credentials: ILoginCredentials;
  jwtSessionKey: IPromiseBasedObservable<string>;
  login(credentials: ILoginCredentials): void;
}

export class AuthStore implements IAuthStore {
  @observable
  credentials: ILoginCredentials = {
    email: '',
    password: ''
  };

  @observable
  jwtSessionKey: IPromiseBasedObservable<string>;

  @action
  login(credentials: ILoginCredentials) {
    this.credentials = { ...this.credentials, ...credentials };
    setTimeout(() => Router.replace('/'), 500);
  }

  @action
  logout() {
    setTimeout(() => Router.replace('/agent/login'), 500);
    this.jwtSessionKey = fromPromise(postLogin(this.credentials));
    // setTimeout(() => Router.replace('/'), 500);
  }
}

const store = new AuthStore();

export default store;
