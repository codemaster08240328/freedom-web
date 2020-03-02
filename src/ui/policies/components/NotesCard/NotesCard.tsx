import React, { Component } from 'react'
import { observer } from 'mobx-react';
import {
  NotesCardContainer,
  NoteTimestap,
  AgentName,
  NoteLine,
  NoteOption,
  NoteContent,
} from './NotesCard.style';

export interface IProps {
  timestamp: string;
  agentName: string;
  option: string;
  content: string;
  onClick(): void;
}

@observer
export default class NotesCard extends Component<IProps> {
  render() {
    const {
      timestamp,
      agentName,
      option,
      content,
      onClick
    } = this.props;
    const displayContent = this.getDisplayContent(content);

    return (
      <NotesCardContainer onClick={onClick}>
        <NoteLine>
          <NoteTimestap>
            {timestamp}
          </NoteTimestap>
          <AgentName>
            {agentName}
          </AgentName>
        </NoteLine>
        <NoteLine>
          <NoteOption>
            {option}
          </NoteOption>
        </NoteLine>
        <NoteLine>
          <NoteContent>
            {displayContent}
          </NoteContent>  
        </NoteLine>
      </NotesCardContainer>
    )
  }

  getDisplayContent = value => {
    const extraValue = value.length > 30 ? ' ...' : '';
    return value.substring(0, 35) + extraValue;
  }
}
