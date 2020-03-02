import React from 'react';
import { Popover } from 'reactstrap';
import {
  PopperContainer,
  PopHeader,
  PopBody,
  PopperIcon
} from './PopoversComponent.style';

export interface IProps {
  title: string;
  body: string;
  id: string;
}

export default class PopoversComponent extends React.Component<IProps, any> {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    const { title, body, id, ...props } = this.props;
    return (
      <PopperContainer id={id} {...props}>
        <PopperIcon id="Popover1" onMouseOver={this.toggle}>
          Launch Popover
        </PopperIcon>
        <Popover
          placement="bottom"
          isOpen={this.state.popoverOpen}
          target="Popover1"
          toggle={this.toggle}
        >
          <PopHeader>{title}</PopHeader>
          <PopBody>{body}</PopBody>
        </Popover>
      </PopperContainer>
    );
  }
}
