import * as React from 'react';
import { FormGroup, Label } from 'reactstrap';
import styled from 'styled-components';
const HelpText = styled.span`
  position: absolute;
  top: 35px;
  left: 0;
  color: #FD2500;
  font-size: 12px;
`;

const InputLabel = styled(Label)`
  margin-bottom: 0.2rem;
  width: 100%;
  display: block;
  position: relative;
`;

const Input = styled.input`
  display: block;
	width: 100%;
	height: 35px;
	padding: .375rem .75rem;
  box-sizing: border-box;
  margin-bottom: 1.2rem;
	font-size: 14px;
	line-height: 1.5;
	color: #3F3F3F;
	background-color: transparent;
	background-clip: padding-box;
	border: 1px solid #c2c2c2;
	transition: border 1s ease-in-out;
	&::-webkit-input-placeholder {
    color: #7C8495;
    text-transform: capitalize;
    font-size: 14px;
  }
  &:focus {
    outline: none;
    border-color: red;
  }
  &:-webkit-autofill {
       background-color: transparent !important;
       }
`;


export interface IProps {
  label: string;
  id: string;
  help: string;
}

class SelectFieldView extends React.Component<IProps> {
  render() {
    const {help, label, id, ...props} = this.props;
    return (
      <FormGroup>

        <InputLabel for={id}>{label}</InputLabel>
        <Input {...props} id={id}/>



        <HelpText>{help}</HelpText>
      </FormGroup>
    );
  }
}

export default SelectFieldView;