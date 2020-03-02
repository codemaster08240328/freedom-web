import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from '@src/shared/cards/Card';

export const FilterHeaderWrapper = styled(Card)`
  display: block;
  margin-top: 20px;
  box-shadow:0 1px 5px 0 #6f6f6f;
`;

export const FilterDataWrapper = styled(Card)`
  display: block;
  margin-top: 20px;
  box-shadow:0 1px 5px 0 #6f6f6f;
`;


export const CheckFieldWrapper = styled.div`
  display: inline-block;
  width: 180px;
  margin: 10px 20px;
  text-align: left;
`;

export const TR = styled.tr`
  :hover {
    cursor: pointer;
    background-color: #fcfbfd;
  }
`;

export const ActiveTR = styled.tr`
  :hover {
    cursor: pointer;
    background-color: #fcfbfd;
    box-shadow: 0px 0px 5px 2px rgba(255,0,0,0.8);
  }
`;

export const TH = styled.th`
  vertical-align: middle !important;
  height: 80px;
`;

export const TD = styled.td`
  color: #000;
  padding-left: 25px !important;
  padding-right: 25px !important;
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

export const ActionsTD = styled.td`
  width: 100px;
  padding: 0 15px;
  vertical-align: middle !important;
`;

export const FontAwesome = styled(FontAwesomeIcon)`
  font-size: 18px;
  margin: 0 5px;
  display: inline-block;
  cursor: pointer;
`;