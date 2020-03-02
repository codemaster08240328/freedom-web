/* eslint-env jest */
import * as React from 'react';
import { mount, shallow } from 'enzyme';

const Logo = '/static/img/logos/FL-logo-white.svg';
import HeaderUI from './HeaderUI';
import { Container } from './HeaderUI.style';

describe('HeaderUI Component', () => {
    let component;

    beforeAll(() => {
        component = mount(<HeaderUI logo={Logo}/>);
    });

    it('renders HeaderUI', () => {
        component = shallow(<HeaderUI logo={undefined}/>);
        expect(component.find(Container).length).toEqual(1);
    });

    it('renders NavbarBrand', () => {
        component = shallow(<HeaderUI logo={Logo}/>);
        expect(component.find('NavbarBrand')).toHaveLength(1);
    });

    it('renders Navbar', () => {
        component = shallow(<HeaderUI logo={Logo} />);
        expect(component.find('Navbar')).toHaveLength(1);
    });

    it('renders Logo', () => {
        component = mount(<HeaderUI logo={Logo} />);
        expect(component.find('.navbar-brand').length).toEqual(1);
    });
});