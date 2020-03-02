/* eslint-env jest */
import * as React from 'react';
import { shallow } from 'enzyme';

import IntroBlurb from './';

describe('IntroBlurb Component', () => {
    it('renders Container', () => {
        const productListUI = shallow(<IntroBlurb />);
        expect(productListUI.find('Container')).toHaveLength(1);
    });
    
    it('renders Title', () => {
        const title = 'Random Title';
        const productListUI = shallow(<IntroBlurb title={title} />);
        expect(productListUI.find('h2.title').text().trim()).toEqual(title);
    });
    
    it('renders SubTitle', () => {
        const subTitle = 'SubTitle ABC';
        const productListUI = shallow(<IntroBlurb subTitle={subTitle} />);
        expect(productListUI.find('.subTitle').text().trim()).toEqual(subTitle);
    });

 });