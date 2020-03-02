import { Container as BSContainer, Nav as BSNav, TabContent as BSTabContent, Col as BSCol } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import theme from 'styled-theming';

const mainThemeColor = theme('theme', {
  mainCallCenterTheme: '#FF0000;'
});

export const Header = styled(BSContainer)`
  max-width: 100%;
  padding: 0;
  position: fixed;
  top: 60px;
  background-color: #ffffff;
  z-Index: 100;
`;

export const HeaderStyled = styled.div`
  width: 100vw;
  height: 60px;
  background-color: ${mainThemeColor};
`;

export const Nav = styled(BSNav)`
  min-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 50px;
  list-style: none;
  box-shadow: 0 4px 4px 0 #E2E2E2;
  .nav-item {
    cursor: pointer;
    border-bottom: 1px solid transparent;
    transform: all 300ms ease-in;
    .nav-link {
      font-size: 20px;
      color: #34495E;
    }
    .active {
      color: #7ed321;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  padding: 0;
  margin: 0;
  width: 100vw;
  height: calc(100vh - 120px);
  margin-top: 60px;
  background-color: #f6f7f9;
`;

export const Content = styled.div`
  flex: 1;
  float: left;
  width: calc(100vw - 90px);

  &>.row {
    height: 700px;
    overflow-y: auto;
  }
`;

export const SideNav = styled(BSNav)`
  width: 90px;
  height: 100%;
  padding: 15px 0;
  background-color: #ffffff;
  border-right: 1px solid #d4d8df;
  align-items: center;
  float: left;

  .nav-item {
    cursor: pointer;

    .nav-link {
      margin: 24px 0;
      padding: 0;
    }
  }
`;

export const BottomBar = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100px;
  background-color: #ffffff;
  box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.11);
`;

export const TabContent = styled(BSTabContent)`
  padding: 20px 30px;
`;

export const Summary = styled(BSCol)`
  padding: 20px 30px;
`;