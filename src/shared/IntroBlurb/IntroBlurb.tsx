import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { PageDesc } from './IntroBlurb.style';

export interface IProps {
  primary?: boolean;
  title?: string | JSX.Element;
  subTitle?: string | JSX.Element;
}

@observer
class IntroBlurb extends Component<IProps> {
  render() {
    const { title, subTitle } = this.props;
    return (
        <PageDesc>
          <Container>
            <Row>
              <Col sm="12" md={{ size: 8, offset: 2 }}>
                <h2 className="title">
                  {title}
                </h2>
                <div className="subTitle m-b-10">{subTitle}</div>
              </Col>
            </Row>
          </Container>
        </PageDesc>
    );
  }
}

export default IntroBlurb;
