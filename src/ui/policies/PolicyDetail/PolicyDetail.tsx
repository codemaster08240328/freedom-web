import { observer } from 'mobx-react';
import * as React from 'react';
import { Col, NavItem, NavLink, Row } from 'reactstrap';
import UIStore from './uistore';
import Timeline from '../Timeline';
import Notes from '../Notes/Notes';
import {
  BottomBar,
  Container,
  Content,
  Header,
  HeaderStyled,
  Nav,
  Summary,
  TabContent,
} from './PolicyDetail.style';

import { IPolicy, IPropertyPolicyField, IUpdatePolicyParam } from '../types';
import Footer from '../../dial/footer';
import DialStore from '../../dial/store';
import PaymentInfo from './components/PaymentInfo';
import PolicyHolder from './components/PolicyHolder';
import { PeopleStore, PeopleTabView } from '../../../ui/people';

interface IPolicyDetailProps {
  policy: IPolicy;

  updatePolicy(policy: IPolicy): void;
}

@observer
class PolicyDetail extends React.Component<IPolicyDetailProps> {
  toggle(id) {
    UIStore.selectTab(id);
  }

  onUpdatePolicyPaymentInfo = (params: IUpdatePolicyParam) => {
    let { policy } = this.props;
    policy = { ...policy, ...params };
    this.props.updatePolicy(policy);
  };

  onPolicyHolderUpdate = (params: IPropertyPolicyField) => {
    let { policy } = this.props;
    policy = { ...policy, ...params };

    console.log(policy);

    this.props.updatePolicy(policy);
  };

  onPolicyHolderClaim = () => {
    alert('Coming soon');
  };

  render() {
    const { policy } = this.props;

    if (!policy) {
      return <h2>No policy</h2>;
    }

    return (
      <React.Fragment>
        <HeaderStyled/>
        <Header>
          <Row>
            <Col>
              <Nav>
                {UIStore.tabList.map(tab => (
                  <NavItem key={tab.id} onClick={this.toggle.bind(this, tab.id)}>
                    <NavLink active={tab.id === UIStore.activeTab.id}>{tab.title}</NavLink>
                  </NavItem>
                ))}
              </Nav>
            </Col>
          </Row>
        </Header>
        <Container>
          <Content>
            <Row>
              <Summary sm="4">
                <PolicyHolder
                  policy={policy}
                  onPolicyHolderUpdate={this.onPolicyHolderUpdate}
                  onPolicyHolderClaim={this.onPolicyHolderClaim}
                  peopleStore={PeopleStore}
                />
                <PaymentInfo
                  policy={policy}
                  onUpdatePaymentInfo={this.onUpdatePolicyPaymentInfo}
                />
              </Summary>
              <Col sm="7">
                {UIStore.activeTab.id === '4' && (
                  <PeopleTabView store={PeopleStore}/>
                )}

                {UIStore.activeTab.id === '6' &&
                  <Timeline />
                }
                {UIStore.activeTab.id === '7' &&
                  <Notes />
                }
                <TabContent activeTab={UIStore.activeTab.id}/>
              </Col>
            </Row>
            <BottomBar/>
          </Content>
        </Container>
        <Footer store={DialStore}/>
      </React.Fragment>
    );
  }
}

export default PolicyDetail;
