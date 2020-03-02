import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { isMobile } from 'react-device-detect';
import { Col, Container, Row } from 'reactstrap';
import ButtonOutline from '../buttons/ButtonOutline';
import RedWave from '../waves/RedWave';
import { HeroDeskView, HeroMobileView } from './HeroUI.style';

class HeroUI extends Component {
  renderContent = () => {
    if (isMobile) {
      return (
        <HeroMobileView>
          <h1>Mobile</h1>
        </HeroMobileView>
      );
    }
    return (
      <HeroDeskView>
        <Container>
          <Row className="align-middle">
            <Col md="6" className="align-middle">
              <ScrollAnimation delay={80} animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false}>
                <h1 className="title text-left m-b-20">
                  Life insurance
                  <br />
                  <strong> as it should be</strong>
                </h1>
              </ScrollAnimation>
              <ScrollAnimation delay={160} animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false}>
                <h5 className="text-white m-b-10">
                  Phasellus <strong>pretium tortor nec libero</strong> ullamcorper lacinia. Ut cursus{' '}
                  <strong>in augue vitae accumsan</strong>.
                </h5>
              </ScrollAnimation>
              <ScrollAnimation delay={240} animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false}>
                <ButtonOutline className="mt-3">Find out more</ButtonOutline>
              </ScrollAnimation>
            </Col>
            {this.props.children}
          </Row>
        </Container>
        <RedWave />
      </HeroDeskView>
    );
  };

  render() {
    return this.renderContent();
  }
}

export default HeroUI;
