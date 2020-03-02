import React from 'react';
import moment from 'moment';
import Datetime from 'react-datetime';
import './react-datetime.css';

export interface IProps {
  id: string
}

class DatePickerComponent extends React.Component<IProps, any> {
  constructor(props) {
    super(props);
  
    this.state = {
      dateValue: moment()
    };
  }
  
  handleDateChange = (dateValue) => {
    this.setState({ dateValue });
  };

  getValidDate = (currentDate) => {
    const yesterday = moment().subtract(1, 'day');
    return currentDate.isAfter(yesterday);
  };

  render() {
    return (
      <Datetime
        value={this.state.dateValue}
        onChange={this.handleDateChange}
        input={true}
        inputProps={{readOnly: true}}
        dateFormat={"Do MMMM, YYYY"}
        isValidDate={this.getValidDate}
        closeOnSelect={true}
        timeFormat={false}
      />
    )
  }
}

export default DatePickerComponent;
