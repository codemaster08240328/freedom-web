/* eslint-env jest */
import { shallow } from 'enzyme';
import * as React from 'react';
import { NavItem } from 'reactstrap';

import Detail from '../PolicyDetail';
import { IPolicy } from '../types';
import { Header } from '../PolicyDetail/PolicyDetail.style';
import { noop } from 'lodash';
import moment from 'moment';

const __POLICY__: IPolicy = {
  productId: '1',
  arrears: '0',
  easyPayNumber:'12345678',
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
};

describe('IPolicy detail', () => {
  it('renders no policy when empty', () => {
    const detail = shallow(<Detail updatePolicy={noop} policy={null} />);
    expect(detail.find('h2').text()).toEqual('No policy');
  });

  it('renders correct tabs', () => {
    const detail = shallow(<Detail updatePolicy={noop} policy={__POLICY__} />);
    expect(
      detail
        .find(Header)
        .children()
        .find(NavItem)
    ).toHaveLength(7);
  });
});
