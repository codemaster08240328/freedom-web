import { FieldProps } from 'formik';
import * as React from 'react';
import SelectFieldView, { IProps } from './SelectFieldView';

class SelectField extends React.Component<FieldProps & IProps> {
  render() {
    const {field, form: {errors, touched}, ...props} = this.props;
    const errorMsg = touched[field.name] && errors[field.name];
    return (
      <SelectFieldView
        help={errorMsg}
        {...field}
        {...props}
      />
    );
  }
}

export default SelectField;