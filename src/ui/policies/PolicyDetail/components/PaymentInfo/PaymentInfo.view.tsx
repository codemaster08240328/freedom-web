import * as React from 'react';
import { observer } from 'mobx-react';
import {
  faWallet,
  faUsers,
  faAngleDown,
  faAngleUp,
  faComments,
  faPencilAlt
} from '@fortawesome/free-solid-svg-icons'
import { DropdownMenu, DropdownItem } from 'reactstrap';

import { IPolicy, IUpdatePolicyParam } from '../../../types';
import { TPaymentInfoList } from './types'
import { ordinalNumberFormatter } from '../../../../../helpers/helper';
import {
  PaymentInfoContainer,
  PaymentInfoHeader,
  PaymentInfoHeaderText,
  WalletIconContainer,
  HeaderIcon,
  ListIcon,
  ListRow,
  ListText,
  PencilIcon,
  ListColRight,
  ListColText,
  ListColIcon,
  BankingDetailHeader,
  BankingDetailIconContainer,
  UpdateButton,
  UpdateButtonText,
  PencilIconWrapper,
  DropdownToggleWrapper,
  DropdownWrapper,
  DropdownMenuWrapper
} from './PaymentInfo.style';
import UIStore from './uistore';

interface IPaymentInfoProps {
  policy: IPolicy,
  onUpdatePaymentInfo(params: IUpdatePolicyParam): void;
}

@observer
export default class PaymentInfo extends React.Component<IPaymentInfoProps> {
  constructor(props) {
    super(props);

    UIStore.paymentMethod = props.policy.paymentMethod;
  }

  handleOptionsSelect = (optionIndex: number) =>
    UIStore.setPaymentMethod(UIStore.dropDownOptions[optionIndex]);

  handleUpdateButtonClick = () => {
    const { paymentMethod } = UIStore;
    if (paymentMethod !== this.props.policy.paymentMethod) {
      this.props.onUpdatePaymentInfo({ paymentMethod });
    }
  };

  renderDropdownMenu = () => {
    return (
      <React.Fragment>
        <DropdownMenuWrapper>
          <DropdownMenu>
            {UIStore.dropDownOptions.map((item, key) => {
              const handler = () => this.handleOptionsSelect(key);
              return (
                <DropdownItem key={key} onClick={handler}>{item}</DropdownItem>)
            })}
          </DropdownMenu>
        </DropdownMenuWrapper>
      </React.Fragment>);
  };

  renderStaticPaymentItems = (policy: IPolicy, list: TPaymentInfoList) => (
    <React.Fragment>
      { list.map(item => (
        <ListRow key={item.key}>
          <ListColIcon xs="1">
            <ListIcon icon={item.icon}/>
          </ListColIcon>
          <ListColText xs="6">
            <ListText>{item.text}</ListText>
          </ListColText>
          <ListColRight xs="5">
            <ListText>{policy[item.key]}</ListText>
          </ListColRight>
        </ListRow>
      ))}
    </React.Fragment>
  );

  renderPaymentInfo = () => {
    const { policy } = this.props;
    const { paymentMethod, showPaymentMethodDropdown } = UIStore;
    return (
      <React.Fragment>
        <PaymentInfoHeader>
          <PaymentInfoHeaderText>Payment Info</PaymentInfoHeaderText>
          <WalletIconContainer>
            <HeaderIcon icon={faWallet}/>
          </WalletIconContainer>
        </PaymentInfoHeader>
        {this.renderStaticPaymentItems(policy, UIStore.paymentInfoList)}
        <ListRow>
          <ListColIcon xs="1">
            <ListIcon icon={faUsers}/>
          </ListColIcon>
          <ListColText xs="6">
            <ListText>Payment Method</ListText>
          </ListColText>
          <ListColRight xs="5">
            <DropdownWrapper
              isOpen={showPaymentMethodDropdown}
              toggle={UIStore.togglePaymentMethodDropdown}
            >
              <DropdownToggleWrapper tag="span">
                <ListText>{paymentMethod}</ListText>
                <PencilIconWrapper>
                  <PencilIcon icon={faPencilAlt}/>
                </PencilIconWrapper>
              </DropdownToggleWrapper>
              {this.renderDropdownMenu()}
            </DropdownWrapper>
          </ListColRight>
        </ListRow>
      </React.Fragment>
    )
  };

  renderBankingDetails = () => {
    const { policy } = this.props;
    const { showBankingDetails } = UIStore;
    return (
      <React.Fragment>
        <BankingDetailHeader>
          <PaymentInfoHeaderText>Banking Details</PaymentInfoHeaderText>
          <BankingDetailIconContainer onClick={UIStore.toggleBankingDetails}>
            <HeaderIcon icon={showBankingDetails? faAngleUp : faAngleDown}/>
          </BankingDetailIconContainer>
        </BankingDetailHeader>
        {showBankingDetails && (<div>
          {this.renderStaticPaymentItems(policy, UIStore.bankingDetailsList)}
          <ListRow>
            <ListColIcon xs="1">
              <ListIcon icon={faComments}/>
            </ListColIcon>
            <ListColText xs="6">
              <ListText>Debit Date</ListText>
            </ListColText>
            <ListColRight xs="5">
              <ListText>{ordinalNumberFormatter(policy.debitDay)} of the month</ListText>
            </ListColRight>
          </ListRow>
        </div>)}
      </React.Fragment>
    )
  };

  render() {
    return (<React.Fragment>
      <PaymentInfoContainer>
        {this.renderPaymentInfo()}
        {UIStore.showBankingDetailsBlock && this.renderBankingDetails()}
        <UpdateButton onClick={this.handleUpdateButtonClick}>
          <UpdateButtonText>Update</UpdateButtonText>
        </UpdateButton>
      </PaymentInfoContainer>
    </React.Fragment>);
  }
}