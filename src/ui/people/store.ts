import { action, computed, observable } from 'mobx';
import { fromPromise, IPromiseBasedObservable } from 'mobx-utils';
// import * as api from '../../api/people';
import { getAllPeople, createPerson, updatePerson, removePerson } from '../../mock-api/people';
import { IPeople, IPerson } from './types';

export class PeopleStore {
  @observable 
  getAllPeopleResult: IPromiseBasedObservable<IPeople>;

  @computed 
  get people(): IPeople {
    if (!this.getAllPeopleResult) {
      this.loadPeople();
      return [];
    }
    return this.getAllPeopleResult.value || [];
  }

  constructor() {
    this.loadPeople();
  }

  @action 
  loadPeople() {
    const promise = getAllPeople();
    this.getAllPeopleResult = fromPromise(promise);
  }

  @action
  createPerson = async (person: IPerson) => {
    // await api.createPerson(person);
    createPerson(person);
    this.loadPeople();
  }

  @action
  updatePerson = async (person: IPerson) => {
    // await api.updatePerson(id, person);
    updatePerson(person);
    this.loadPeople();
  }

  @action
  removePerson = async ({ id }: IPerson) => {
    // await api.removePerson(id);
    removePerson(id);
    this.loadPeople();
  }

}

const store = new PeopleStore();

export default store;