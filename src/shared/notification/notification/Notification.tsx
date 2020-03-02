import React, { Component } from 'react';
import {
  SuccessAlert,
  WarningAlert,
  ErrorAlert,
  Icon,
  NotificationContainer,
  NotificationContent,
  CloseButton
} from './Notification.style';

export interface IProps {
  type: string; // success, danger, warning
  title: string;
  text: string;
}

class Notification extends Component<IProps, any> {
  constructor(props) {
    super(props);

    this.state = {
      visible: true
    };

    this.onDismiss = this.onDismiss.bind(this);
    setTimeout(this.onDismiss, 3000);
  }

  onDismiss() {
    this.setState({
      visible: false
    });
  }

  render() {
    const { type, title, text } = this.props;

    let Alert;
    let iconName;
    let iconColor;
    switch (type) {
      case 'success':
        Alert = SuccessAlert;
        iconName = 'check';
        iconColor = '#48d2a0';
        break;
      case 'warning':
        Alert = WarningAlert;
        iconName = 'info-circle';
        iconColor = '#f8c51c';
        break;
      default:
        Alert = ErrorAlert;
        iconName = 'question-circle';
        iconColor = '#f55567';
        break;
    }
    return (
      <Alert isOpen={this.state.visible}>
        <NotificationContainer>
          <Icon icon={iconName} color={iconColor} />
          <NotificationContent>
            <h5>
              <strong>{title}</strong>
            </h5>
            <span>{text}</span>
          </NotificationContent>
          <CloseButton type="button" aria-label="close" onClick={this.onDismiss}>
            <span aria-hidden="true">×</span>
          </CloseButton>
        </NotificationContainer>
      </Alert>
    );
  }
}

export default Notification;
