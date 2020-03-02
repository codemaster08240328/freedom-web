import * as uuid from 'uuid';

import { PersonType, IPerson, IPeople } from '../ui/people/types';
import { mockRequestHelper } from './mock-request.helper';

const people: IPeople = [
  {
    id: '1',
    type: PersonType.POLICYHOLDER,
    nationalIdNumber: '1231231232132132',
    fullName: 'Tony Kroos',
    mobileNumber: '0841234567',
    bankName: 'ABSA',
    accountNumber: '21546465132132132132',
    branchCode: '3432 123',
    age: 34,
    date: '2017-12-08'
  },
  {
    id: '2',
    type: PersonType.BENEFICIARY,
    nationalIdNumber: '1231231232132132',
    fullName: 'Ash Kroons',
    mobileNumber: '0841234489',
    bankName: 'FNB',
    accountNumber: '21546465132132132132',
    branchCode: '3333 111',
    age: 25,
    date: '2018-11-04'
  }
];

export const getPerson = (id): Promise<IPerson> =>
  mockRequestHelper({
    ...people.find(o => o.id === id)
  });

export const getAllPeople = (): Promise<IPeople> => mockRequestHelper(people);

export const createPerson = (person: IPerson) => {
  person.id = uuid.v4();
  people.push(person);
}

export const updatePerson = (person: IPerson) => {
  const index = people.findIndex(item => person.id === item.id);
  if ( index !== -1) {
    people[index] = person;
  }
}

export const removePerson = (id) => {
  const index = people.findIndex(person => person.id === id);
  if ( index !== -1) {
    people.splice(index, 1);
  }
}
