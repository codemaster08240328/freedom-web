import { action, observable } from 'mobx';

import { ITab, TabList } from './types';

const tabs: ITab[] = [
  {
    id: "1",
    title: 'Overview',
  },
  {
    id: "2",
    title: 'Policy',
  },
  {
    id: "3",
    title: 'Payment',
  },
  {
    id: "4",
    title: 'People',
  },
  {
    id: "5",
    title: 'Claims',
  },
  {
    id: "6",
    title: 'Timeline',
  },
  {
    id: "7",
    title: 'Documents',
  }
];

export class UIStore {

  @observable
  tabList: TabList;

  @observable
  activeTab: ITab;

  constructor() {
    this.tabList = tabs;
    this.activeTab = tabs[0];
  }

  @action
  selectTab(id) {
    const newTab: ITab = this.tabList.find(tab => tab.id === id);
    
    if (this.activeTab.id !== newTab.id) {
      this.activeTab = newTab;
    }
  }
}

const store = new UIStore();

export default store;