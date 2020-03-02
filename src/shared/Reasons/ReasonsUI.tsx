import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import CardComponent from '../cards/CardComponent/';
import IntroBlurb from '../IntroBlurb/';
import { ReasonsContainer } from './ReasonsUI.style';

const predictableIcon = '/static/img/icons/predictableIcon.png';
const responsibleIcon = '/static/img/icons/responsibleIcon.png';
const quickIcon = '/static/img/icons/quickIcon.png';

@observer
class ReasonsUI extends Component {
  render() {
    return (
      <ReasonsContainer>
        <IntroBlurb
          title="Why insure with Freedom Life?"
          subTitle=""
        />
        <Container>
          <Row>
            <Col xs="12" sm="6" md="4">
              <CardComponent
                imageIcon={responsibleIcon}
                title={'Responsible & Established'}
                desc={'With established partners like Old Mutual and Shoprite, you can rely on us for peace of mind.'}
              />
            </Col>
            <Col xs="12" sm="6" md="4">
              <CardComponent
                imageIcon={quickIcon}
                title={'Quick & Easy'}
                desc={'We use the latest technologies, to make the application process as easy as possible.'}
              />
            </Col>
            <Col xs="12" sm="6" md="4">
              <CardComponent
                imageIcon={predictableIcon}
                title={'Predictable & Transparent'}
                desc={'Our prices are easy to understand, and won\'t surprise you with hidden costs.'}
              />
            </Col>
          </Row>
        </Container>
      </ReasonsContainer>
    );
  }
}

export default ReasonsUI;
