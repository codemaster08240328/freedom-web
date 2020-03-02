import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Footer, FooterBase, FooterMain, FooterWave, FooterWaves} from './FooterUI.style';
@observer
class FooterUI extends Component {
  render() {
    return (
      <Footer>
        <FooterWave>
          <FooterWaves />
        </FooterWave>
        <FooterMain>
          <Container>
            <Row>
             TODO: FOOTER
            </Row>
          </Container>
        </FooterMain>
        <FooterBase>
          <Container>
            <Row>
              <Col>
                <p className="copyRights">
                  Freedom Life Funeral Cover is administered by Freedom Technologies (Proprietary) Limited, registration
                  number 1969/012588/07, an authorised financial services provider (FSP number 47458). The Funeral
                  Policy is underwritten by Old Mutual Alternative Risk Transfer Limited (OMART), a registered long-term
                  insurer (registration number 1997/008994/06)
                </p>
              </Col>
            </Row>
          </Container>
        </FooterBase>
      </Footer>
    );
  }
}

export default FooterUI;
