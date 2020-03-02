import styled from 'styled-components';
import { Button } from 'reactstrap';

interface IBoxProps {
  primary?: boolean;
}

export const RadioBtnUI = styled(Button)`
   font-size: 1em;
   overflow: hidden;
  display: inline-block;
  line-height: 1.5em;
  padding: 0;
  border-radius: 2px;
  font-weight: 300;
  letter-spacing: 0.02em;
  color: #FD2500;
  border: 1px solid #FD2500;
  background: transparent center;
  transition: all 0.8s ;
  
  &:hover, &:focus {
    background-color: #FD2500;
    color: #FFFFFF;
    border: 1px solid #FD2500;
  }
`;

export const Box = styled.div<IBoxProps>`
  text-align: center;
  padding: 0.5em 1em;
  min-width: 100px;
  border-radius: 2px;
  background:${props => props.primary ? 'background: red' : 'background: transparent'};
`;