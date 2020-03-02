import {
  Container as BSContainer,
  NavItem as BSNavItem,
  DropdownMenu as BSDropdownMenu,
  DropdownItem as BSDropdownItem
} from 'reactstrap';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  z-index: 90;
  @media (min-width: 700px) {
    display: block;
  }
`;

export const Container = styled(BSContainer)`
  @media (min-width: 700px) {
    max-width: 100%;
  }
`;

export const MenuBurger = styled.button`
  @media (min-width: 700px) {
    display: none;
  }
`;

export const DropdownMenu = styled(BSDropdownMenu)`
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.07);
  background-color: #ffffff;
  margin-top: 0.5rem;
`;

export const NavItemDropdown = styled.div`
  min-width: 150px;
  padding: 0 10px;

  @media (min-width: 700px) {
    a {
      display: block;
      padding: 1em;
      color: #4a4a4a;
      transition: all 0.5s ease-in-out;
      &:hover {
        text-decoration: none;
        background-color: #ddd;
      }
    }
  }
`;

export const DropdownItem = styled(BSDropdownItem)`
  letter-spacing: 0.4px;
  color: #6b89a0;
  padding: 0.25rem 0.5rem;
`;

export const NavItem = styled(BSNavItem)`
  list-style: none;
  color: #6b89a0;

  a {
    font-family: 'Eina03', 'Roboto', sans-serif;
    color: #6b89a0;
    transition: color 0.3s ease;
    &:hover {
      text-decoration: none;
    }
  }
`;

export const FLogo = styled.img`
  width: 40px;
`;
