import {
  Container as BSContainer,
} from 'reactstrap';
import styled from 'styled-components';
import ButtonOutline from '../../../shared/buttons/ButtonOutline';
import Card from '@src/shared/cards/Card';

export const Container = styled(BSContainer)`
  padding-top: 60px;
  .Policy__List {
    margin-bottom: 50px;
  }
`;

export const PolicyTableWrapper = styled(Card)`
  display: block;
  margin-top: 20px;
  box-shadow:0 1px 5px 0 #6f6f6f;
`;

export const Button = styled(ButtonOutline)`
  display: block;
  width: 300px;
  height: 50px;
  margin: 0 auto;
`;

export const TR = styled.tr`
  :hover {
    cursor: pointer;
    background-color: #fcfbfd;
  }
`;

export const TH = styled.th`
  vertical-align: middle !important;
`;

export const TD = styled.td`
  color: #000;
  vertical-align: middle !important;
`;

export const CheckboxTH = styled.th`
  padding-right: 0 !important;
  height: 64px;
  vertical-align: middle !important;
  .custom-checkbox {
    padding-left: 2.5rem;
    margin: 0 auto;
    label {
      display: block;
    }
  }
  .custom-checkbox .custom-control-input:checked~.custom-control-label::before {
    background-color: #f00;
  }
`;

export const CheckboxTD = styled.td`
  padding-right: 0 !important;
  height: 64px;
  vertical-align: middle !important;
  .custom-checkbox {
    padding-left: 2.5rem;
    margin: 0 auto;
    label {
      display: block;
    }
  }
  .custom-checkbox .custom-control-input:checked~.custom-control-label::before {
    background-color: #f00;
  }
`;

export interface IProps {
  active?: boolean;
}

export const StatusData = styled.div<IProps>`
  span {
    display: inline-block;
    margin-right: 5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${props => (props.active ? '#0f0': '#f00')};
  }
`;

export const LabelTag = styled.div`
  display: block;
  width: 100px;
  height: 30px;
  background-color: #d4d4d4;
  border-radius: 5px;
  text-align: center;
  padding-top: 3px;
`;