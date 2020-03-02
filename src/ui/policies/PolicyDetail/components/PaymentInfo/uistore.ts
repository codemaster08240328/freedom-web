import { action, observable, computed } from 'mobx';
import { TDropDownOptions, TPaymentInfoList } from './types';
import { values } from 'lodash';
import {
  faMobileAlt,
  faCalendarAlt,
  faShoppingBag,
  faUserAlt,
  faComments
} from '@fortawesome/free-solid-svg-icons';


export const paymentMethods = {
  IN_STORE: 'In Store',
  DEBIT_ORDER: 'Debit Order'
};

export const dropDownOptions: TDropDownOptions = values(paymentMethods);
const paymentInfoList: TPaymentInfoList = [
  {
    key: 'easyPayNumber',
    icon: faMobileAlt,
    text: 'EasyPay No.'
  }, {
    key: 'arrears',
    icon: faCalendarAlt,
    text: 'Arrears'
  }, {
    key: 'amountDue',
    icon: faShoppingBag,
    text: 'Amount Due'
  }
];
const bankingDetailsList: TPaymentInfoList = [
  {
    key: 'bankName',
    icon: faUserAlt,
    text: 'Bank Name'
  }, {
    key: 'accountNumber',
    icon: faComments,
    text: 'Account Number'
  }
];

export class PolicyInfoUIStore {
  @observable
  paymentMethod: string = '';

  @observable
  showBankingDetails: boolean = true;

  @observable
  showPaymentMethodDropdown: boolean = false;

  @observable
  dropDownOptions: TDropDownOptions = dropDownOptions;

  @observable
  paymentInfoList: TPaymentInfoList = paymentInfoList;

  @observable
  bankingDetailsList: TPaymentInfoList = bankingDetailsList;

  @computed
  get showBankingDetailsBlock() {
    return this.paymentMethod === paymentMethods.DEBIT_ORDER;
  }

  @action
  setPaymentMethod(method: string) {
    if (this.paymentMethod !== method) {
      this.paymentMethod = method;
    }
  }

  @action
  toggleBankingDetails = () => {
    this.showBankingDetails = !this.showBankingDetails;
  };

  @action
  togglePaymentMethodDropdown = () => {
    this.showPaymentMethodDropdown = !this.showPaymentMethodDropdown;
  };
}

const store = new PolicyInfoUIStore();

export default store;