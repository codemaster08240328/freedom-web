import { observer } from 'mobx-react';
import * as React from 'react';

import { Container } from './Container.style';
import { NotificationStore } from '../store';
import Notification from '../notification';

export interface INotificationContainerProps {
  store: NotificationStore;
}

@observer
export default class NotificationContainer extends React.Component<INotificationContainerProps> {
  render() {
    const { store } = this.props;

    return (
      <Container>
        {
          store.notifications.map( ({ createdAt, ...notification }) => {
            return(
              <Notification
                key={createdAt}
                {...notification}
              />
            )
          })
        }
      </Container>
    );
  }
}
