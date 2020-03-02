import React from 'react';
import { TabContent, TabPane, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { NavTabs, JobCard } from './TabsView.style';

export interface IProps {
  tabs: boolean;
}

export default class TabsView extends React.Component<IProps, any> {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle = (tab) => () => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };
  render() {
    return (
      <React.Fragment>
        <NavTabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={this.toggle('1')}
            >
              All positions
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={this.toggle('2')}
            >
              Data Science
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={this.toggle('3')}
            >
              Business
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={this.toggle('4')}
            >
              Marketing
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '5' })}
              onClick={this.toggle('5')}
            >
              Development
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '6' })}
              onClick={this.toggle('6')}
            >
              Design
            </NavLink>
          </NavItem>
        </NavTabs>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col md={4}>
                <JobCard primary={true}>
                  <h6>Data Scientist</h6>
                  Cape Town, South Africa
                </JobCard>
              </Col>
              <Col md={4}>
                <JobCard primary={true}>
                  <h6>Web Developer</h6>
                  Cape Town, South Africa
                </JobCard>
              </Col>
              <Col md={4}>
                <JobCard primary={true}>
                  <h6>Project Manager</h6>
                  Cape Town, South Africa
                </JobCard>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <h4>Tab 2 Contents</h4>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
                <h4>Tab 3 Contents</h4>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row>
              <Col sm="12">
                <h4>Tab 4 Contents</h4>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="5">
            <Row>
              <Col sm="12">
                <h4>Tab 6 Contents</h4>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="6">
            <Row>
              <Col sm="12">
                <h4>Tab 6 Contents</h4>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </React.Fragment>
    );
  }
}