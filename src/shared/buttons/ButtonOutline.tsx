import styled from "styled-components";
import Button from './Button';


export default styled(Button)`
  color: ${props => (props.primary ? "#FD2500" : "#FFFFFF")};
  border: 1px solid ${props => (props.primary ? "#FD2500" : "#FFFFFF")};
  background:transparent center;
`;
