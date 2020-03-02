import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { ProgressBar } from './WizardStepperView.style';

export interface IProps {
  id: string;
  stepCount: number;
  activeStep?: number;
}

class WizardStepperView extends Component<IProps> {
  renderSteps = (): JSX.Element => {
    const { id, stepCount, activeStep } = this.props;
    let ind = 1;
    const steps = [];
    let active = activeStep;

    if (active === undefined) {
      active = 1;
    }
    while (ind <= stepCount) {
      if (ind === active) {
        steps.push(<li className="active" key={ind}/>);
      } else {
        steps.push(<li key={ind}/>);
      }
      ind += 1;
    }

    return (
      <ProgressBar id={id}>
        { steps.map((val): JSX.Element =>  val) } 
      </ProgressBar>)
  };

  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col>
              { this.renderSteps() }
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default WizardStepperView;
