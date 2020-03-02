import * as React from 'react';
import { FormGroup } from 'reactstrap';
import DatePickerComponent from './DatePickerComponent';
import { HelpText, InputLabel } from './DatePickerView.style';

export interface IProps {
  label: string;
  id: string;
  help: string;
}

class DatePickerView extends React.Component<IProps> {
  render() {
    const {help, label, id, ...props} = this.props;
    return (
      <FormGroup>
        <InputLabel for={id}>{label}</InputLabel>
        <DatePickerComponent
          {...props}
          id={id}
        />
        <HelpText>{help}</HelpText>
      </FormGroup>
    );
  }
}

export default DatePickerView;