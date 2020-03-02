import { action, computed, observable } from 'mobx';
import { fromPromise, IPromiseBasedObservable } from 'mobx-utils';
import * as uuid from 'uuid';
import {
  getAllNotes,
  createNewNote,
  submitNoteData,
} from '../../../mock-api/note';
import { INote, INoteData } from '../types';

export class Notestore {

  @observable
  getAllNotesResult: IPromiseBasedObservable<INoteData>;

  @observable
  selectedNote: INote;
  @observable
  newNote: INote;

  @computed
  get noteData(): INoteData {
    if (!this.getAllNotesResult) {
      this.loadNoteData();
      return [];
    }
    return this.getAllNotesResult.value || [];
  }

  @computed
  get currentNote(): INote {
    if (!this.selectedNote) {
      this.selectedNote = this.noteData[0];
      return this.selectedNote;
    }
    return this.selectedNote;
  }

  constructor() {
    this.loadNoteData();
  }

  @action
  loadNoteData() {
    const promise = getAllNotes();
    this.getAllNotesResult = fromPromise(promise);
  }

  @action
  setCurrentNote = (ind) => {
    this.selectedNote = this.noteData[ind];
  }

  @action
  changeNoteContent = (value) => {
    this.selectedNote.content = value;
  }

  @action
  createNote = () => {
    // todo override it with response to avoid server round trip
    this.newNote = {
      id: uuid.v4(),
      timestamp: '06/05/2017 15:30',
      agent: 'Agents Name',
      option: 'Accordion Option',
      content: '',
    };
    this.selectedNote = this.newNote;
  }

  @action
  submitNote = () => {
    // todo override it with response to avoid server round trip
    if (this.newNote && this.newNote.id !== undefined) {
      createNewNote(this.newNote);
      this.newNote = null;
    }
    else {
      submitNoteData(this.currentNote);
    }
    this.loadNoteData();
  }

  @action
  async updateNote({id, ...notes}: INote) {
    // todo override it with response to avoid server round trip
    this.loadNoteData();
  }
}

const store = new Notestore();

export default store;
