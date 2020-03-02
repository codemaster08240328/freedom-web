import { action, computed, observable } from 'mobx';
import { fromPromise, IPromiseBasedObservable } from 'mobx-utils';
import _ from 'lodash';
import { getAllTimelines } from '../../../mock-api/timeline';
import { IEvent, ITimelineData } from '../types';
import { filterData } from '../PolicyConfig';

export class TimelineStore {

  @observable
  getAllTimelinesResult: IPromiseBasedObservable<ITimelineData>;

  @observable
  selectedTimeline: IEvent;

  @observable
  filterData: ITimelineData;

  @computed
  get activeTimelines(): ITimelineData {
    if (!this.getAllTimelinesResult) {
      this.loadTimelineData();
      return [];
    }
    const filter = this.filterData;
    const activeResults = this.getAllTimelinesResult.value.filter(value => filter[value.action].active)
    return activeResults || [];
  }

  constructor() {
    this.filterData = filterData;
    this.loadTimelineData();
  }

  @action
  loadTimelineData() {
    const promise = getAllTimelines();
    this.getAllTimelinesResult = fromPromise(promise);
  }

  @action
  async updateTimeline({id, ...timeline}: IEvent) {
    // todo override it with response to avoid server round trip
    this.loadTimelineData();
  }

  @action
  nextTimelinePage = () => {
    // todo override it with response to avoid server round trip
    this.loadTimelineData();
  };

  @action
  prevTimelinePage = () => {
    // todo override it with response to avoid server round trip
    this.loadTimelineData();
  };

  @action
  changeFields = (key) => () => {
    if (this.filterData[key] !== undefined) {
      _.update(this.filterData, `${key}.active`, n => !n);
    }
  };
}

const store = new TimelineStore();

export default store;
