export interface INotification {
  type: string;
  title: string;
  text: string;
  createdAt: number;
}

export type INotificationList = INotification[];