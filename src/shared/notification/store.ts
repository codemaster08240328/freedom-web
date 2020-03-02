import { action, observable } from 'mobx';
import moment from 'moment';
import { INotificationList } from './types';

export class NotificationStore {
  @observable notifications: INotificationList = [];

  @action addNotification(notification) {
    const data = { ...notification };
    data.createdAt = moment().unix();
    this.notifications.push(data);
  }

  @action deleteNotification(notification) {
    const index = this.notifications.findIndex(item => item === notification);
    this.notifications.splice(index, 1);
  }

  @action deleteAllNotification() {
    this.notifications = [];
  }
}

const store = new NotificationStore();

export default store;


