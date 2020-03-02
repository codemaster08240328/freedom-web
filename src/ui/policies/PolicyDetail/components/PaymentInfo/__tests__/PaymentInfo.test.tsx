/* eslint-env jest */
import React from 'react';
import { shallow, render } from 'enzyme';
import 'jest-styled-components';
import { noop } from 'lodash'
import { DropdownItem } from 'reactstrap';

import { IPolicy } from '../../../../types';
import moment from 'moment';

const mockedData: IPolicy = {
  productId: '99',
  id: '77722222',
  age: 24,
  openedAt: moment('2018-10-10').format('YYYY-MM-DD'),
  policyHolderId: '2342342',
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
  firstName: 'Charlene',
  lastName: 'Buckley',
  mobileNumber: '08905623212',
  instalmentAmount: 55,
  paymentMethod: 'Debit Order',
  bankName: 'Nedbank',
  accountNumber: '1032554209',
  debitDay: 14,
  debitAuthority: true,
  arrears: 'R 0.00',
  easyPayNumber: '952938984734721',
  whatsappMsg: 2
};

import PaymentInfo from '../PaymentInfo.view';
import UIStore, { dropDownOptions } from '../uistore'
import { UpdateButton } from '../PaymentInfo.style';

describe("Policy detail payment info", () => {
  it('Component should match snapshot', () => {
    const paymentInfoView = shallow(<PaymentInfo
      policy={mockedData}
      onUpdatePaymentInfo={noop}
    />);
    expect(paymentInfoView).toMatchSnapshot();
  });
  it('Should update internal payment method state', () => {
    const paymentInfoView = shallow(<PaymentInfo
      policy={mockedData}
      onUpdatePaymentInfo={noop}
    />);

    paymentInfoView.find(DropdownItem).at(0).simulate('click');
    expect(UIStore.paymentMethod).toBe(dropDownOptions[0]);

    paymentInfoView.find(DropdownItem).at(1).simulate('click');
    expect(UIStore.paymentMethod).toBe(dropDownOptions[1]);
  });

  it('Should call update method with new payment method value', () => {
    const onUpdatePaymentInfo = jest.fn();
    const paymentInfoView = shallow(<PaymentInfo
      policy={mockedData}
      onUpdatePaymentInfo={onUpdatePaymentInfo}
    />);

    paymentInfoView.find(DropdownItem).at(0).simulate('click');
    paymentInfoView.find(UpdateButton).simulate('click');

    expect(onUpdatePaymentInfo).toHaveBeenCalled();
    expect(onUpdatePaymentInfo).toHaveBeenCalledWith({paymentMethod: dropDownOptions[0]});
  });

  it('Should not call update method with the same payment method value', () => {
    const onUpdatePaymentInfo = jest.fn();
    const paymentInfoView = shallow(<PaymentInfo
      policy={mockedData}
      onUpdatePaymentInfo={onUpdatePaymentInfo}
    />);

    paymentInfoView.find(DropdownItem).at(1).simulate('click');
    paymentInfoView.find(UpdateButton).simulate('click');

    expect(onUpdatePaymentInfo).not.toHaveBeenCalled();
  });
});