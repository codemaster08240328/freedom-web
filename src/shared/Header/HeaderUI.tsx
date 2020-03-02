import * as React from 'react';
import { observer } from 'mobx-react';
import { Collapse, DropdownToggle, Nav, Navbar, NavbarBrand, UncontrolledDropdown, Badge, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  FLogo,
  Container,
  HeaderContainer,
  NavItem,
  DropdownMenu,
  NavItemDropdown,
  DropdownItem
} from './HeaderUI.style';

import './Header.css';

import PolicySummary from '../PolicySummary';
import PolicyStore from '../../ui/policies/store';
import AuthStore from '../../ui/login/store';
import { faBell, faUser } from '@fortawesome/free-regular-svg-icons';

export interface IProps {
  logo: string;
}

@observer
class HeaderUI extends React.Component<IProps, any> {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapsed: true,
      isTop: true,
      addClass: false
    };
    this.toggle.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 60;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
  }

  toggle() {
    this.setState({
      addClass: !this.state.addClass,
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const { logo } = this.props;
    const menuClass = ['menu-burger'];

    if (this.state.addClass) {
      menuClass.push('view');
    }

    return (
      <HeaderContainer>
        <Navbar
          dark={true}
          expand="md"
          className={this.state.isTop ? 'navbar-default navbar-static-top' : 'navbar-fixed-top active'}
        >
          <Container>
            <NavbarBrand href="/">
              <FLogo src={logo} alt="logo" />
            </NavbarBrand>
            <button className={menuClass.join(' ')} onClick={this.toggle}>
              <span />
              <span />
              <span />
              <span />
            </button>
            <Collapse isOpen={!this.state.collapsed} navbar={true}>
              {PolicyStore.selectedPolicy && <PolicySummary policy={PolicyStore.selectedPolicy} />}
              <Nav className="ml-auto" navbar={true} id="list">
                <NavItem>
                  <NavLink>
                    <FontAwesomeIcon icon={faBell} />
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav={true} inNavbar={true}>
                  <DropdownToggle nav={true} caret={true}>
                    <FontAwesomeIcon icon={faUser} />
                  </DropdownToggle>
                  <DropdownMenu right={true}>
                    <NavItemDropdown>
                      <DropdownItem>Status</DropdownItem>
                      <DropdownItem divider={true} />
                      <DropdownItem onClick={AuthStore.logout}>Log Out</DropdownItem>
                      <DropdownItem divider={true} />
                    </NavItemDropdown>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </HeaderContainer>
    );
  }
}

export default HeaderUI;
