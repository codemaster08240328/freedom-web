import React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { Col, Modal, Row } from 'reactstrap';
import moment from 'moment';

import { IPolicy, IPropertyPolicyField } from '../../../types';
import {
  BigInfo,
  Body,
  Bottom,
  Icon,
  IconContainer,
  Info,
  LBorderCol,
  LButton,
  RButton,
  Top,
  UBorderCol,
  Wrapper
} from './PolicyHolder.style';

import Form from '../../../../../ui/people/Form';
import { PeopleStore } from '../../../../people/store';
import { IPerson, PersonType } from '../../../../people/types';

export interface IProps {
  policy: IPolicy;
  peopleStore: PeopleStore;

  onPolicyHolderUpdate(params: IPropertyPolicyField): void;

  onPolicyHolderClaim(): void;
}

@observer
class PolicyHolder extends React.Component<IProps> {
  @observable modalOpen = false;
  @observable policyholderPerson = {};

  constructor(props) {
    super(props);

    this.state = {
      policy: props.policy
    };

    const { people } = props.peopleStore;
    const index = people.findIndex(person => person.type === PersonType.POLICYHOLDER);
    this.policyholderPerson = people[index];
    // console.log(this.policyholderPerson);
  }

  onSubmit = async (values): Promise<void> => {
    await this.props.peopleStore.updatePerson(values);
  };

  toggleModal = () => {
    this.modalOpen = !this.modalOpen;
  };

  renderOverview = () => {
    const { policy } = this.props;

    return (
      <React.Fragment>
        <Top>
          <Row>
            <Col xs="6" sm="6">
              <BigInfo>{policy.firstName} {policy.lastName}</BigInfo>
            </Col>
            <Col xs="4" sm="4">
              <BigInfo>Age: {policy.age}</BigInfo>
            </Col>
            <LBorderCol sm="2">
              <Icon icon='check-circle' color='#c0e391'/>
            </LBorderCol>
          </Row>
        </Top>
        <Body>
        <Row>
          <UBorderCol xs="1" sm="1">
            <IconContainer>
              <Icon icon='mobile-alt' color='#a9bbc9'/>
            </IconContainer>
          </UBorderCol>
          <UBorderCol xs="6" sm="6">
            <Info>Mobile Phone</Info>
          </UBorderCol>
          <UBorderCol xs="5" sm="5">
            <Info>{policy.mobileNumber}</Info>
          </UBorderCol>
        </Row>
        <Row>
          <UBorderCol xs="1" sm="1">
            <IconContainer>
              <Icon icon='calendar-alt' color='#a9bbc9'/>
            </IconContainer>
          </UBorderCol>
          <UBorderCol xs="6" sm="6">
            <Info>Date Opened</Info>
          </UBorderCol>
          <UBorderCol xs="5" sm="5">
            <Info>{moment(policy.openedAt).format('YYYY-MM-DD')}</Info>
          </UBorderCol>
        </Row>
        <Row>
          <UBorderCol xs="1" sm="1">
            <IconContainer>
              <Icon icon='clipboard' color='#a9bbc9'/>
            </IconContainer>
          </UBorderCol>
          <UBorderCol xs="6" sm="6">
            <Info>Situation</Info>
          </UBorderCol>
          <UBorderCol xs="5" sm="5">
            <Info>{policy.situation}</Info>
          </UBorderCol>
        </Row>
        <Row>
          <UBorderCol xs="1" sm="1">
            <IconContainer>
              <Icon icon='user-friends' color='#a9bbc9'/>
            </IconContainer>
          </UBorderCol>
          <UBorderCol xs="6" sm="6">
            <Info>Dependants</Info>
          </UBorderCol>
          <UBorderCol xs="5" sm="5">
            <Info>{0}</Info>
          </UBorderCol>
        </Row>
        <Row>
          <UBorderCol xs="1" sm="1">
            <IconContainer>
              <Icon icon='user-check' color='#a9bbc9'/>
            </IconContainer>
          </UBorderCol>
          <UBorderCol xs="6" sm="6">
            <Info>Beneficiary</Info>
          </UBorderCol>
          <UBorderCol xs="5" sm="5">
            <Info>{'Yes'}</Info>
          </UBorderCol>
        </Row>
        <Row>
          <UBorderCol xs="1" sm="1">
            <IconContainer>
              <Icon icon='user-friends' color='#a9bbc9'/>
            </IconContainer>
          </UBorderCol>
          <UBorderCol xs="6" sm="6">
            <Info>Whatsapp Msg</Info>
          </UBorderCol>
          <UBorderCol xs="5" sm="5">
            <Info>{24}</Info>
            <IconContainer>
              <Icon icon='eye' color='#a9bbc9'/>
            </IconContainer>
          </UBorderCol>
        </Row>
        </Body>
        <Bottom>
          <LButton onClick={this.props.onPolicyHolderClaim}>
            CLAIM
          </LButton>
          <RButton onClick={this.toggleModal}>
            UPDATE
          </RButton>
        </Bottom>
      </React.Fragment>
    );
  };

  renderModal = () => {
    return (
      <Modal
        centered={true}
        size="lg"
        isOpen={this.modalOpen}
        toggle={this.toggleModal}
      >
        <Form
          personData={this.policyholderPerson as IPerson}
          onSubmit={this.onSubmit}
        />
        {/*<Form*/}
        {/*policy={this.props.policy}*/}
        {/*onSubmit={this.onSubmit}*/}
        {/*onClaim={this.props.onPolicyHolderClaim}*/}
        {/*/>*/}
      </Modal>
    );
  };

  render() {
    return (
      <Wrapper primary={true}>
        {this.renderModal()}
        {this.renderOverview()}
      </Wrapper>
    );
  }
}

export default PolicyHolder;