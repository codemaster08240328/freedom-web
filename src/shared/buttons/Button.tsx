import styled from "styled-components";
export interface IProps {
  primary?: boolean;
  wide?: boolean;
}

export default styled.button<IProps>`
  font-size: 1em;
  display: inline-block;
  line-height: 1.5em;
  padding: 0.5em 1em;
  border-radius: 2px;
  font-weight: 300;
  letter-spacing: 0.02em;
  color: ${props => (props.primary ? '#FFFFFF' : '#FD2500')};
  border: 1px solid ${props => (props.primary ? '#FD2500' : 'transparent')};
  background:${props => (props.primary ? '#FD2500' : 'transparent')} center;
  transition: all 0.8s ;
  min-width: ${props => (props.wide ? '150px' : 'auto')};
    &:not(:disabled) {
      outline: none; 
      box-shadow: none;
      }
      &:hover {
       color: #ffffff;
       border-color: #90000C;
       background: #90000C radial-gradient(circle, transparent 1%, #9000 1%) center/15000%;
      }
      &:active {
       background-color: #FF7760;
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
