import { Col as BSCol, Row as BSRow } from 'reactstrap';
import styled from 'styled-components';

export const Row = styled(BSRow)`
  width: 100%;
  align-items: center;
  margin: 0 40px;
`;

export const Col = styled(BSCol)`
  padding: 10px 0;
  border-right: 1px solid #d4d8df;
  text-align: center;
`;

export const Info = styled.span`
  font-size: 16px;
  letter-spacing: 0.4px;
  color: #34495e;
`;

export const CallText = styled.span`
  font-size: 18px;
  color: #7ed321;
`;

export const DropdownSubMenu = styled.li`
  position: relative;

  >.dropdown-menu {
    top: 0;
    left: 100%;
    margin-top: -6px;
    margin-left: -1px;
    --webkit-border-radius: 0 6px 6px 6px;
    --moz-border-radius: 0 6px 6px;
    border-radius: 0 6px 6px 6px;
  }

  :hover > .dropdown-menu {
    display: block;
  }

  > a:after {
    display: block;
    content: ' ';
    float: right;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    border-width: 5px 0 5px 5px;
    border-left-color: #ccc;
    margin-top: 5px;
    margin-right: -10px;
  }

  :hover > a:after {
    border-left-color: #fff;
  }

  .pull-left {
    float: none;
  }

  .pull-left > .dropdown-menu {
    left: -100%;
    margin-left: 10px;
    --webkit-border-radius: 6px 0 6px 6px;
    --moz-border-radius: 6px 0 6px 6px;
    border-radius: 6px 0 6px 6px;
  }
`;
