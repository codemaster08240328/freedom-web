import React from 'react';
import {
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from 'reactstrap';
import { DropDownBtn } from './ButtonDropDownComponent.style';


export interface IProps {
  btnText: string;
}

export default class ButtonDropDownComponent extends React.Component<IProps, any> {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    const { btnText } = this.props;
    return (

      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropDownBtn>
          <DropdownToggle caret={true}>
            {btnText}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Header</DropdownItem>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </DropDownBtn>
      </ButtonDropdown>


    );
  }
}
