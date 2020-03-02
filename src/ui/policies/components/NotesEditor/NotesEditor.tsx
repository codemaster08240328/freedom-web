import React, { Component } from 'react'
import { observer } from 'mobx-react';
import {
  NotesEditorContainer,
  NoteTimestamp,
  AgentName,
  NoteLine,
  NoteOption,
  NoteContent,
  NoteHeader,
} from './NotesEditor.style';

export interface IProps {
  timestamp: string;
  agentName: string;
  option: string;
  content: string;
  onChange(value: string): void;
}

@observer
export default class NotesEditor extends Component<IProps, any> {
  constructor(props) {
    super(props);
  }

  onChangeContent = (event) => {
    const { onChange } = this.props;
    onChange(event.target.value);
  }

  componentDidUpdate() {
    console.log('updated ', this.content)
    window.content = this.content;
    this.content.focus();
  }

  render() {
    const {
      timestamp,
      agentName,
      option,
      content,
    } = this.props;
    return (
      <NotesEditorContainer>
        <NoteHeader>
        <NoteLine>
          <NoteTimestamp>
            {timestamp}
          </NoteTimestamp>
          <AgentName>
            {agentName}
          </AgentName>
        </NoteLine>
        <NoteLine>
          <NoteOption>
            {option}
          </NoteOption>
        </NoteLine>
        </NoteHeader>
        <NoteLine>
          <NoteContent
            value={content}
            onChange={this.onChangeContent}
            spellCheck={false}
            ref={ref => this.content = ref}
          />
        </NoteLine>
      </NotesEditorContainer>
    )
  }
}
