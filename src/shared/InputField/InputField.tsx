import React from 'react';
import { FieldProps } from 'formik';
import { HelpText, Input, Label } from './InputField.style';
import { FormGroup } from 'reactstrap';


export interface IProps extends FieldProps {
  label: string;
  placeholder: string;name: string;
  hint?: string;
  whiteTheme?: boolean;
}

class InputField extends React.Component<IProps> {
  render() {
    const {
      label,
      field,
      form: { touched, errors },
      hint,
      whiteTheme,
      ...props
    } = this.props;
    const errorMsg = touched[field.name] && errors[field.name];

    return (
      <FormGroup>
        {label && <Label>{label}</Label>}
        <Input
          theme={{ whiteTheme }}
          {...props}
          {...field}
        />
        <HelpText
          theme={{ whiteTheme, hintTheme: !errorMsg }}
        >
          {errorMsg || hint}
        </HelpText>
      </FormGroup>
    );
  }
}

export default InputField;
