import React from 'react';
import { Fade } from 'reactstrap';
import { FadeInBtn } from './FadeInComponent.style';

export interface IProps {
  btnText: string;
  bodyText: string;
}

export default class FadeInComponent extends React.Component<IProps, any> {
  constructor(props) {
    super(props);
    this.state = {fadeIn: false};
    this.toggle = this.toggle.bind(this);
  }

  render() {
    const {btnText, bodyText} = this.props;
    return (
      <React.Fragment>
        <FadeInBtn onClick={this.toggle}>{btnText}</FadeInBtn>
        <Fade in={this.state.fadeIn} tag="p" className="mt-3">
          {bodyText}
        </Fade>
      </React.Fragment>
    );
  }

  toggle() {
    this.setState({
      fadeIn: !this.state.fadeIn
    });
  }
};
