import React from 'react';
import { observer } from 'mobx-react';
import {
  ButtonDropdown,
  DropdownMenu,
  DropdownToggle,
  CustomInput,
} from 'reactstrap';
import {
  DropDownBtn,
  MenuItem,
  MenuText,
  FormGroupWrapper
} from './DropDownField.style';

export interface IField {
  key: string;
  text: string;
  active?: boolean;
}

export interface IPolicyField {
  [key: string]: IField
}

export interface IProps {
  btnText: string;
  className?: string;
  fields?: IPolicyField;
  changeFields(key: string): any;
}

@observer
export default class DropDownField extends React.Component<IProps, any> {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false,
    };
  }

  clickItem = (key) => () => {
    this.props.changeFields(key);
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  render() {
    const { btnText, fields, className } = this.props;

    return (
      <ButtonDropdown
        className={className}
        isOpen={this.state.dropdownOpen}
        toggle={this.toggle}
      >
        <DropDownBtn>
          <DropdownToggle caret={true}>
            {btnText}
          </DropdownToggle>
          <DropdownMenu>
            {Object.keys(fields).map((key, ind) => {
              const field = fields[key];
              return (
                <MenuItem
                  key={ind}
                  toggle={false}
                  onClick={this.clickItem(field.key)}
                >
                  <FormGroupWrapper check={true}>
                    <CustomInput
                      readOnly={true}
                      type="checkbox"
                      checked={field.active}
                      id={field.key}
                      label=""
                    />
                    <MenuText>
                      {field.text}
                    </MenuText>
                  </FormGroupWrapper>
                </MenuItem>);
            })}
          </DropdownMenu>
        </DropDownBtn>
      </ButtonDropdown>
    );
  }
}
