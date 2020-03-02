import styled from 'styled-components';
import { FormGroup as BootstrapFormGroup } from 'reactstrap';

export const FormGroup = styled(BootstrapFormGroup)`
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

export const MenuText = styled.div`
  margin-left: 6px;
  display: inline-block;
`;