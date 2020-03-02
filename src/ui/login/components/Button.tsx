import styled from "styled-components";
import theme from 'styled-theming';

export interface IProps {
  primary?: boolean;
  wide?: boolean;
  pending?: boolean;
}

const mainThemeColor = theme('theme', {
  mainCallCenterTheme: '#fc1b28'
});

const primaryTextColor = theme('theme', {
  mainCallCenterTheme: '#FFFFFF'
});

const activeBackgroundColor = theme('theme', {
  mainCallCenterTheme: '#FF7760'
});

const hoverColor = theme('theme', {
  mainCallCenterTheme: '#90000C'
});

const hoverColorGradientParam = theme('theme', {
  mainCallCenterTheme: '#9000'
});

export default styled.button<IProps>`
  font-size: 1em;
  display: inline-block;
  line-height: 1.5em;
  padding: 0.5em 1em;
  border-radius: 2px;
  font-weight: 300;
  letter-spacing: 0.02em;
  cursor: pointer;
  color: ${props => (props.primary ? primaryTextColor : mainThemeColor)};
  border: 1px solid ${props => (props.primary ? mainThemeColor : 'transparent')};
  background:${props => (props.primary ? mainThemeColor : 'transparent')} center;
  transition: all 0.8s ;
  min-width: ${props => (props.wide ? '150px' : 'auto')};
    &:not(:disabled) {
      outline: none; 
      box-shadow: none;
      }
      &:active {
       background-color: ${activeBackgroundColor};
      background-size: 100%;
      transition: background 0s;
      }
        &:focus {
        outline: none !important;
        box-shadow: none;
        }
      &:active:focus {
      outline: none; 
      box-shadow: none;
      }
`;
