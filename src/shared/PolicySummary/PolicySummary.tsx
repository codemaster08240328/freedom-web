import React from 'react';
import { DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown } from 'reactstrap';

import { Col, Row, Info, CallText, DropdownSubMenu } from './PolicySummary.style';

import { IPolicy } from '../../ui/policies/types';

interface IProps {
  policy: IPolicy;
}

class PolicySummary extends React.Component<IProps> {
  state = {
    dropdownMenu1: false,
    dropdownMenu2: false
  };
  render() {
    const { policy } = this.props;
    return (
      <React.Fragment>
        <Row>
          <Col>
            <Info>Policy: {policy.id}</Info>
          </Col>
          <Col>
            <Info>{policy.productId}</Info>
          </Col>
          <Col>
            <Info>{policy.status}</Info>
          </Col>
          <Col>
            <UncontrolledDropdown>
              <DropdownToggle caret={true} split={true}>
                Create / Update
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>New Account</DropdownItem>
                <DropdownItem divider={true} />
                <DropdownSubMenu>
                  <DropdownItem>Dependants</DropdownItem>
                  <ul className="dropdown-menu">
                    <DropdownItem>Item1</DropdownItem>
                    <DropdownItem>Item2</DropdownItem>
                  </ul>
                </DropdownSubMenu>
                <DropdownItem divider={true} />
                <DropdownSubMenu>
                  <DropdownItem>Beneficiaries</DropdownItem>
                  <ul className="dropdown-menu">
                    <DropdownItem>Item1</DropdownItem>
                    <DropdownItem>Item2</DropdownItem>
                  </ul>
                </DropdownSubMenu>
                <DropdownItem divider={true} />
                <DropdownItem>Payment Methods</DropdownItem>
                <DropdownItem divider={true} />
                <DropdownSubMenu>
                  <DropdownItem>Change Policy</DropdownItem>
                  <ul className="dropdown-menu">
                    <DropdownItem>Item1</DropdownItem>
                    <DropdownItem>Item2</DropdownItem>
                  </ul>
                </DropdownSubMenu>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Col>
          <Col>
            <CallText>Inbound Call</CallText>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default PolicySummary;
