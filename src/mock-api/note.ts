import * as uuid from 'uuid';
import { INote, INoteData } from '../ui/policies/types';
import { mockRequestHelper } from './mock-request.helper';

const notesData = [
  {
    id: 1,
    timestamp: '06/05/2017 15:30',
    agent: 'Agents Name1',
    option: 'Accordion Option1',
    content: 'Sed suscipit lacucu sagittis , Sed susipit lacus in arcu sagittis',
  },
  {
    id: 2,
    timestamp: '06/05/2017 15:30',
    agent: 'Agents Name2',
    option: 'Accordion Option2',
    content: 'Sed suscipircu sagittis , Sed susipit lacus in arcu sagittis',
  },
  {
    id: 3,
    timestamp: '06/05/2017 15:30',
    agent: 'Agents Name3',
    option: 'Accordion Option3',
    content: 'Sed suscipit lacus inittis , Sed susipit lacus in arcu sagittis',
  },
  {
    id: 4,
    timestamp: '06/05/2017 15:30',
    agent: 'Agents Name4',
    option: 'Accordion Option4',
    content: 'lacus in arcu sagittis , Sed susipit lacus in arcu sagittis',
  },
  {
    id: 5,
    timestamp: '06/05/2017 15:30',
    agent: 'Agents Name5',
    option: 'Accordion Option5',
    content: 'Sed suscipit lacus in arcu sagittis , Sed susipit lacus in arcu sagittis',
  },
];

export const getNote = (id): Promise<INote> =>
  mockRequestHelper({
    ...notesData.find(o => o.id === id)
  });

export const getAllNotes = (): Promise<INoteData> => mockRequestHelper(notesData);

export const createNewNote = (newNote) => {
   notesData.unshift(newNote);
}

export const submitNoteData = (newData: INote) => {
  const index = notesData.findIndex(note => {
    return note.id === newData.id;
  })
  notesData[index] = {...newData};
}