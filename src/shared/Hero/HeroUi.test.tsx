/* eslint-env jest */
import * as React from 'react';
import { shallow } from 'enzyme';

import HeroUI from './';

describe('HeaderUI Component', () => {
    it('should renders HeaderUI', () => {
        const headerUI = shallow(<HeroUI />);
        expect(headerUI.find('Container')).toHaveLength(1);
    });

    it('renders ScrollAnimation', () => {
        const headerUI = shallow(<HeroUI />);
        expect(headerUI.find('ScrollAnimation')).toHaveLength(3);
    });

    it('renders first ScrollAnimation & should have title', () => {
        const headerUI = shallow(<HeroUI />);
        expect(headerUI.find('ScrollAnimation').at(0).children().text()).toEqual('Life insurance as it should be');
    });
});