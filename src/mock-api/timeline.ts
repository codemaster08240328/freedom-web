import { IEvent, ITimelineData } from '../ui/policies/types';
import { mockRequestHelper } from './mock-request.helper';

const timeLineData = [
  {
    id: 1,
    Date: '2018-07-11T16:39:14+07:00',
    action: 'transaction',
    Summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia lacus tempor sem congue convallis.',
  },
  {
    id: 2,
    Date: '2018-07-11T16:39:14+07:00',
    action: 'situation',
    Summary: 'Lorem ipsum dolor sit amet.',
  },
  {
    id: 3,
    Date: '2018-07-11T16:39:14+07:00',
    action: 'communication',
    Summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 4,
    Date: '2018-07-11T16:39:14+07:00',
    action: 'transaction',
    Summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia lacus tempor sem congue convallis.',
  },
  {
    id: 5,
    Date: '2018-07-11T16:39:14+07:00',
    action: 'transaction',
    Summary: 'Lorem ipsum dolor sit amet.',
  },
  {
    id: 6,
    Date: '2018-07-11T16:39:14+07:00',
    action: 'transaction',
    Summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 7,
    Date: '2018-07-11T16:39:14+07:00',
    action: 'situation',
    Summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia lacus tempor sem congue convallis.',
  },
  {
    id: 8,
    Date: '2018-07-11T16:39:14+07:00',
    action: 'situation',
    Summary: 'Lorem ipsum dolor sit amet.',
  },
  {
    id: 9,
    Date: '2018-07-11T16:39:14+07:00',
    action: 'communication',
    Summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  }
];

export const getTimeline = (id): Promise<IEvent> =>
  mockRequestHelper({
    ...timeLineData.find(o => o.id === id)
  });

export const getAllTimelines = (): Promise<ITimelineData> => mockRequestHelper(timeLineData);
