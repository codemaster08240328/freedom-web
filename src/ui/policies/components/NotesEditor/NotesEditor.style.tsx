import styled from 'styled-components';
import { Input } from 'reactstrap';

export const NotesEditorContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px 10px;
  text-align: left;
  p {
    margin: 0px;
  }
`;
export const NoteHeader = styled.div`
  height: 42px;
`;

export const NoteLine = styled.div`
  display: block;
  width: 100%;
  clear: both;
`;

export const NoteTimestamp = styled.p`
  width: 80px;
  display: block;
  float: left;
  font-size: 10px;
  color: #93abb9;
`;

export const AgentName = styled.p`
  width: 80px;
  display: block;
  float: right;
  font-size: 10px;
  color: #93abb9;
`;

export const NoteOption = styled.p`
  display: block;
  font-size: 18px;
  color: #6f7e8b;
`;

export const NoteContent = styled.textarea`
  display: block;
  width: 100%;
  height: 250px !important;
  outline: none;
  border: none;
  resize: none;
  font-size: 14px !important;
  color: #93abb9;
  padding: 0;
  :hover, :active, :focus {
    outline: none;
    border-color: transparent;
  }
`;
