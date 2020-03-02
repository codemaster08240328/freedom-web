import React from 'react';
import { CustomInput } from 'reactstrap';
import {
  FormGroup,
  MenuText,
} from './CheckboxField.style';

export interface IProps {
  btnText: string;
  checked: boolean;
  id: string;
  onChange: (event: object) => void;
}

export default class CheckboxField extends React.Component<IProps> {
  render() {
    const { btnText, checked, id } = this.props;

    return (
      <FormGroup check={true}>
        <CustomInput
          type="checkbox"
          checked={checked}
          onChange={this.props.onChange}
          id={id}
          label=""
        />
        <MenuText>
          {btnText}
        </MenuText>
      </FormGroup>
    )
  }
}
