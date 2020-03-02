import { action } from 'mobx';

export interface IDialStore {
  startCall(): void;
  endCall(): void;
  parkCall(): void;
}

export class DialStore implements IDialStore{
  @action
  startCall() {
    console.log('start call pressed');
  }

  @action
  endCall() {
    console.log('end call pressed');
  }

  @action
  parkCall() {
    console.log('han call pressed');
  }
}

const store = new DialStore();
export default store;