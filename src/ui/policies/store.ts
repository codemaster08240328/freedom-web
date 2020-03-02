import { action, computed, observable } from 'mobx';
import { fromPromise, IPromiseBasedObservable } from 'mobx-utils';
import _ from 'lodash';
import * as mockApi from '../../mock-api/policy';
import * as api from '../../api/policy';
import { showFieldData, sortFieldData } from './PolicyConfig';
import { IPolicy, IPolicyField, PolicyList } from './types';

export class PolicyStore {

  @observable
  getAllPoliciesResult: IPromiseBasedObservable<PolicyList>;

  @observable
  selectedPolicy: IPolicy;

  @observable
  showFields: Partial<IPolicyField>;

  @observable
  sortFields: Partial<IPolicyField>;

  @computed
  get policies(): PolicyList {
    if (!this.getAllPoliciesResult) {
      this.loadPolicies();
      return [];
    }
    return this.getAllPoliciesResult.value || [];
  }

  constructor() {
    this.showFields = {...showFieldData};
    this.sortFields = {...sortFieldData};
    this.loadPolicies();
  }

  @action
  loadPolicies() {
    const promise = mockApi.getAllPolicies();
    this.getAllPoliciesResult = fromPromise(promise);
  }

  @action
  async selectPolicy(id = null) {
    if (id === null) {
      this.selectedPolicy = null;
    } else {
      // summary (immediate)
      this.selectedPolicy = this.policies.find(o => o.id === id);
      // detail (delayed async)
      this.selectedPolicy = await mockApi.getPolicy(id);
    }
  }

  @action
  async updatePolicy({id, ...policy}: IPolicy) {
    await api.updatePolicyQuery(id, policy);
    // todo override it with response to avoid server round trip
    this.loadPolicies();
  }

  @action
  async removePolicy({ id }: IPolicy) {
    await api.removePolicyQuery(id);
    // todo override it with response to avoid server round trip
    this.loadPolicies();
  }

  @action
  nextPolicyPage = () => {
    // todo override it with response to avoid server round trip
    this.loadPolicies();
  };

  @action
  prevPolicyPage = () => {
    // todo override it with response to avoid server round trip
    this.loadPolicies();
  };

  @action
  searchPolicy = () => {
    // todo override it with response to avoid server round trip
    this.loadPolicies();
  };

  @action
  changeFields = (type) => (key) => {
    if (type && this.showFields[key] !== undefined) {
      _.update(this.showFields, `${key}.active`, n => !n);
    }
    else if (!type && this.sortFields[key] !== undefined) {
      _.update(this.sortFields, `${key}.active`, n => !n);
    }
  };

  @action
  sortField = (key) => {
    if (this.sortFields[key] !== undefined) {
      Object.keys(this.sortFields).map(fieldKey => {
        this.sortFields[fieldKey].active = false;
      });
      _.set(this.sortFields, `${key}.active`, true);
    }
  }
}

const store = new PolicyStore();

export default store;
