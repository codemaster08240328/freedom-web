import styled from 'styled-components';
import Card from '@src/shared/cards/Card';
import ButtonOutline from '@src/shared/buttons/ButtonOutline';
import { Col as ColStyle, Row as RowStyle } from 'reactstrap';

export const NotesContainer = styled(Card)`
  display: block;
  width: 900px;
  height: 450px;
  margin-top: 20px;
  box-shadow: 0 1px 5px 0 #6f6f6f;
`;

export const Button = styled(ButtonOutline)`
  width: 200px;
  height: 50px;
  float: right;
  margin-left: -7px;
  border-color: #93abb9;
  color: #93abb9;
  font-weight: bold;
`;

export const Col = styled(ColStyle)`
  padding: 0;
`;

export const Row = styled(RowStyle)`
  width: 100%;
  margin: 0;
`;

export const NotesHeader = styled.div`
  height: 70px;
  width: 100%;
  text-align: left;
  padding: 10px 10px;
  box-shadow: 0 1px 1px 1px #E2E2E2;
`;

export const NoteCards= styled.div`
  height: 380px;
  overflow-y: auto;
`;

export const NotesTitle = styled.p`
  display: inline-block;
  font-size: 22px;
  font-weight: bold;
  padding-top: 10px;
  padding-left: 10px;
  color: #93abb9;
`;

export const ContentEditor = styled.div`
  display: block;
  height: calc(100% - 100px);
`;

export const SubmitLine = styled.div`
  display: block;
  height: 100px;
`;

export const SubmitButton = styled(ButtonOutline)`
  width: 200px;
  height: 50px;
  float: right;
  margin-right: 10px;
  background-color: #93abb9;
  border-color: #6f7e8b;
  color: #6f7e8b;
  font-weight: bold;
`;
