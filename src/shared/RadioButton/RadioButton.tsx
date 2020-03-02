import React, { Component } from 'react';
import { FieldProps, FormikProps } from 'formik';
import { RadioBtnUI, Box } from './RadioButton.style';

export interface IProps extends FieldProps {
  label?: string;
  value: string | number | boolean | null;
  active?: boolean;
}

export default class RadioButton extends Component<IProps, FieldProps > {
  render() {
    const { label, value, form, field, ...props } = this.props;
    const active = field.value === value;
    return (
      <RadioBtnUI
        active={active}
        onClick={this.handleClick(form, field.name, value)}
        {...props}
      >
        <Box primary={true}>
          {label || value }
        </Box>
      </RadioBtnUI>
    );
  }

  private handleClick = (form: FormikProps<any>, fieldName: string, value: any) => () => {
    form.setFieldValue(fieldName, value);
  };
}

