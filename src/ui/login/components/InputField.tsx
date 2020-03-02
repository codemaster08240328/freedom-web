import React from 'react';
import styled from "styled-components";
import { FieldProps } from 'formik';


const Label = styled.label`
  font-size: 14px;
  text-align: left;
  color: #3F3F3F;
  margin-bottom: 0;
  text-transform: capitalize;
`;

const Input = styled.input`
  display: block;
	width: 100%;
	height: calc(2.25rem + 2px);
	padding: .375rem .75rem;
	font-size: 14px;
	line-height: 1.5;
	color: #3F3F3F;
	background-color: #fff;
	background-clip: padding-box;
	border: 1px solid #ced4da;
	&::-webkit-input-placeholder {
    color: #7C8495;
    text-transform: capitalize;
    font-size: 14px;
  }
  &:focus {
    outline: none;
  }
`;



const Helper = styled.span`
  font-size: 0.7em;
  text-align: left;
  color: #3F3F3F;
`;


export interface IProps extends FieldProps {
  label: string;
  className?: string;
  id?: string;
  placeholder: string;name: string;
}

class InputField extends React.Component<IProps> {
  render() {
    const {label, field, form:{touched, errors},  ...props} = this.props;
    const errorMsg = touched[field.name] && errors[field.name];
    return (
      <React.Fragment>
        <Label>{label}</Label>
        <Input {...props} {...field} />
        <Helper>{errorMsg}</Helper>
      </React.Fragment>
    );
  }
}

export default InputField;

