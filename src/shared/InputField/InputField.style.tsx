import * as React from 'react';
import { Label as BSLabel} from 'reactstrap';
import styled from 'styled-components';

export const HelpText = styled.span`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  color: ${props => props.theme.hintTheme ? '#858585' : '#fd2500'};
  font-size: 12px;
`;

HelpText.defaultProps = {
  theme: {
    whiteTheme: false,
    hintTheme: false,
  }
}

export const Label = styled(BSLabel)`
  margin-bottom: 0.2rem;
  width: 100%;
  display: block;
  position: relative;
`;

export const Input = styled.input`
  display: block;
	width: 100%;
	height: ${props => props.theme.whiteTheme ? 'auto' : '35px'};
	padding: ${props => props.theme.whiteTheme ? '0.85rem .9rem' : '.375rem .75rem'};
  box-sizing: border-box;
  margin-bottom: 1.2rem;
	font-size: 14px;
	line-height: 1.5;
	color: #3F3F3F;
	background-color: ${props => props.theme.whiteTheme ? '#fff' : 'transparent'};
	background-clip: padding-box;
	border: 1px solid ${props => props.theme.whiteTheme ? '#ddd' : '#c2c2c2'};
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

Input.defaultProps = {
  theme: {
    whiteTheme: false,
  }
}