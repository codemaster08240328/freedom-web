import { FieldProps } from 'formik';
import * as React from 'react';
import DatePickerView, { IProps } from './DatePickerView';

class DatePicker extends React.Component<FieldProps & IProps> {
  render() {
    const {field, form: {errors, touched}, ...props} = this.props;
    const errorMsg = touched[field.name] && errors[field.name];
    return (
      <DatePickerView
        help={errorMsg}
        {...field}
        {...props}
      />
    );
  }
}

export default DatePicker;