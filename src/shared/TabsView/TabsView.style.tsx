import styled from 'styled-components';
import Card from "../cards/Card";

export const NavTabs = styled.nav`
  justify-content: space-evenly;
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 2em;
    list-style: none;
    border-bottom: 1px solid #C9C9C9;
    .nav-item {
      cursor: pointer;
      border-bottom: 1px solid transparent;
      transform: all 300ms ease-in;
      &:hover {
        color: #FF0000;
        border-bottom: 1px solid red;
      }
      a.active {
       color: #FF0000;
        border-bottom: 1px solid red;
      }
    }
`;

export const JobCard = styled(Card)`
  border-left: 3px solid #FD2500;
  text-align: left;
  padding: 20px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 0px 8px 0 #E2E2E2;
  h6 {
  color: #7F7F7F;
  margin: 0;
  padding: 0;
  }
`;