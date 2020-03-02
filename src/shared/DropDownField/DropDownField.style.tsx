import styled from 'styled-components';
import { DropdownItem, FormGroup } from 'reactstrap';

export const DropDownBtn = styled.div`
  width: 300px;
  height: 50px;
  .dropdown-toggle {
    width: 100%;
    height: 100%;
    min-height: 40px;
    font-size: 1em;
    line-height: 1.5em;
    border-radius: 2px;
    letter-spacing: 0.03em;
    font-family: 'Eina03', sans-serif;
    font-weight: 300;
    color: #ffffff;
    margin: 0.5em 0;
    margin-top: 3px;

    border-color: #FD2500;
    background: #FD2500 center;
    transition: background 0.8s;
    :not(:disabled) {
      outline: none;
      box-shadow: none;
    }
    :active:focus {
      outline: none;
      box-shadow: none;
    }
    &:focus {
      outline: none !important;
      box-shadow: none;
    }
    &:hover {
      color: #3F3F3F;
      border-color: #90000C;
      background: #90000C radial-gradient(circle, transparent 1%, #90000C 1%) center/15000%;
    }
    &:active {
      background-color: #FF7760;
      background-size: 100%;
      transition: background 0s;
    }
    &::after {
      margin-left: 10px;
      margin-top: 7px;
    }
  }

  .dropdown-menu {
    width: 300px;
  }
`;

export const MenuItem = styled(DropdownItem)`
  padding: 3px 10px;
`;

export const MenuText = styled.div`
  margin-left: 6px;
  display: inline-block;
`;

export const FormGroupWrapper = styled(FormGroup)`
  cursor: pointer;
  padding-bottom: 3px;
  .custom-checkbox {
    padding-left: 1rem;
    margin: 0 auto;
    top: 6px;
    display: inline-block;
    label {
      display: block;
    }
  }
  .custom-checkbox .custom-control-input:checked~.custom-control-label::before {
    background-color: #f00;
  }
`;