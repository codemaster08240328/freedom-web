import React, { Component } from 'react'
import { observer } from 'mobx-react';
import NoteStore from './store';
import NotesCard from '../components/NotesCard';
import NotesEditor from '../components/NotesEditor';
import {
  NotesContainer,
  Button,
  NoteCards,
  NotesHeader,
  NotesTitle,
  ContentEditor,
  SubmitLine,
  SubmitButton,
  Col,
  Row
} from './Notes.style';
import { INoteData } from '../types';

@observer
export default class Notes extends Component<any> {
  onClickAccordion = ind => () => {
    const { setCurrentNote } = NoteStore;
    setCurrentNote(ind);
  }

  renderNotes = (noteData: INoteData): JSX.Element => {
    return (
      <React.Fragment>
        {noteData.map((note, ind) => {
          return (
            <NotesCard
              onClick={this.onClickAccordion(ind)}
              timestamp={note.timestamp}
              agentName={note.agent}
              option={note.option}
              content={note.content}
              key={ind}
            />
          )
        })}
      </React.Fragment>
    )
  }
  render() {
    const {
      getAllNotesResult,
      noteData,
      currentNote,
      newNote,
      changeNoteContent,
      createNote,
      submitNote,
    } = NoteStore;
    
    return (
      <NotesContainer>
        <Row>
          <Col>
            <NotesHeader>
              <NotesTitle>
                Notes
              </NotesTitle>
              <Button
                onClick={createNote}
                primary={true}
              >
                CREATE
              </Button>
            </NotesHeader>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <NoteCards>
              {getAllNotesResult.case({
                pending: () => <div>Loading...</div>,
                rejected: error => <div>Ooops.. {error}</div>,
                fulfilled: () => this.renderNotes(noteData)
              })}
            </NoteCards>
          </Col>
          <Col md={8}>
            <ContentEditor>
            {getAllNotesResult.case({
                pending: () => <div/>,
                rejected: error => <div>Ooops.. {error}</div>,
                fulfilled: () => (
                  <NotesEditor
                    onChange={changeNoteContent}
                    timestamp={currentNote.timestamp}
                    agentName={currentNote.agent}
                    option={currentNote.option}
                    content={currentNote.content}
                  />
                )
            })}
            </ContentEditor>
            <SubmitLine>
              <SubmitButton onClick={submitNote}>
                SUBMIT
              </SubmitButton>
            </SubmitLine>
          </Col>
        </Row>

      </NotesContainer>
    )
  }
}
