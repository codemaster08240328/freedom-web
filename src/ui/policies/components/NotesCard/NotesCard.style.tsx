import styled from 'styled-components';

export const NotesCardContainer = styled.div`
  width: 100%;
  padding: 10px 10px;
  box-shadow: 0 1px 1px 1px #E2E2E2;
  text-align: left;
  cursor: pointer;
  p {
    margin: 0px;
  }
`;

export const NoteLine = styled.div`
  display: block;
  width: 100%;
  clear: both;
`;

export const NoteTimestap = styled.p`
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

export const NoteContent = styled.p`
  display: block;
  width: 100%;
  height: 21px;
  font-size: 14px;
  color: #93abb9
`;
