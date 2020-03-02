/* eslint-env jest */
import { shallow } from 'enzyme';
import * as React from 'react';

import { fromPromise } from 'mobx-utils';
import { PolicyStore } from '../store';
import { PolicyList } from '../types';
import Overview from '../Overview';
import moment from 'moment';

const __POLICIES__: PolicyList = [
  {
    productId: '1',
    arrears: '0',
    easyPayNumber: '12345678',
    id: '222121211',
    policyHolderId: 'f',
    beneficiaryId: '9999911212',
    situation: 'Inactive',
    situationDate: '2018-07-11T16:39:14+07:00',
    status: 'inactive',
    balance: '12312',
    amountDue: 'R 0',
    dialedCount: 0,
    source: 'source1',
    lastCallTime: '2018-01-01T14:30:14+07:00',
    nationalIdNumber: '0739468575',
    firstName: 'Charlene',
    lastName: 'Buckley',
    mobileNumber: '08905623212',
    instalmentAmount: 39.9,
    paymentMethod: 'Debit Order',
    bankName: 'Nedbank',
    accountNumber: '1032554207',
    debitDay: 4,
    debitAuthority: true,
    whatsappMsg: 2,
    age: 25,
    openedAt: moment('2018-10-10').format('YYYY-MM-DD'),
  },
  {
    productId: '8',
    arrears: '0',
    easyPayNumber: '12345678',
    id: '1234567',
    policyHolderId: '2222222111111',
    beneficiaryId: '4777774111',
    situation: 'Inactive',
    situationDate: '2018-10-11T14:19:14+07:00',
    status: 'inactive',
    age: 25,
    balance: '12312',
    amountDue: 'R 0',
    dialedCount: 0,
    source: 'source1',
    lastCallTime: '2018-05-11T04:20:14+10:00',
    nationalIdNumber: '0739468576',
    firstName: 'John',
    lastName: 'Doe',
    mobileNumber: '08905623212',
    instalmentAmount: 49,
    whatsappMsg: 2,
    paymentMethod: 'Debit Order',
    bankName: 'Nedbank',
    accountNumber: '1032554208',
    debitDay: 4,
    debitAuthority: false,
    openedAt: moment('2018-10-10').format('YYYY-MM-DD'),
  },
  {
    productId: '99',
    arrears: '0',
    easyPayNumber: '12345678',
    id: '77722222',
    policyHolderId: '2342342',
    whatsappMsg: 2,
    beneficiaryId: '111114444',
    situation: 'Inactive',
    situationDate: '2018-10-11T07:19:14+07:00',
    status: 'inactive',
    balance: '12312',
    amountDue: 'R 0',
    dialedCount: 0,
    source: 'source1',
    lastCallTime: '2018-09-11T14:19:14+10:00',
    nationalIdNumber: '0739468577',
    age: 25,
    firstName: 'Charlene',
    lastName: 'Buckley',
    mobileNumber: '08905623212',
    instalmentAmount: 55,
    paymentMethod: 'Debit Order',
    bankName: 'Nedbank',
    accountNumber: '1032554209',
    debitDay: 4,
    debitAuthority: true,
    openedAt: moment('2018-10-10').format('YYYY-MM-DD'),
  }
];

const mockPolicyResult = fromPromise(Promise.resolve(__POLICIES__));
const mockEmptyPolicyResult = fromPromise(Promise.resolve([]));

const mockStore = new PolicyStore();
mockStore.getAllPoliciesResult = mockEmptyPolicyResult;
mockStore.loadPolicies = async () => (mockStore.getAllPoliciesResult = mockEmptyPolicyResult);

describe('Policies overview', () => {
  it('renders the h1 title', () => {
    const overview = shallow(<Overview store={mockStore}/>);
    expect(overview.find('h1').text()).toEqual('Policies Overview');
  });

  it('renders empty policies list when no policies are provided', () => {
    const overview = shallow(<Overview store={mockStore}/>);
    expect(
      overview
        .find('.Policy__List')
        .children()
        .find('p')
        .text()
    ).toEqual('No policies');
  });

  it('renders policies list with 3 items when 3 policies are provided', () => {
    const overview = shallow(<Overview store={mockStore}/>);
    expect(
      overview
        .find('.Policy__List')
        .children()
        .find('table')
        .children()
    ).toHaveLength(0);
    mockStore.getAllPoliciesResult = mockPolicyResult;
    expect(overview.find('.Policy__List tbody').children()).toHaveLength(3);
  });

  it('renders next and prev button', () => {
    const overview = shallow(<Overview store={mockStore}/>);

    expect(
      overview
        .find('#prevButton')
        .children()
        .text()
    ).toEqual('Prev');

    expect(
      overview
        .find('#nextButton')
        .children()
        .text()
    ).toEqual('Next');
  });
});
