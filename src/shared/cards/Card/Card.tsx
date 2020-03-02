import styled from "styled-components";
export interface IProps {
  primary?: boolean;
}
export default styled.div<IProps>`
  text-align: center;
	border: none;
	border-radius: 2px;
	transition: all 800ms ease;
	margin-bottom: 30px;
  position: relative;
	display: block;
	min-width: 0;
	color: #9B9B9B;
	word-wrap: break-word;
	background-color: #fff;
	background-clip: border-box;
	box-shadow: ${props => (props.primary ? "0 2px 2px 0 #E2E2E2" : "none")};
`;