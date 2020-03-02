/* eslint-env jest */
import * as React from 'react';
import { shallow, mount } from 'enzyme';


import FooterUI from './FooterUI';

describe('FooterUI Component', () => {
    it('renders 2 Containers', () => {
        const footerUI = shallow(<FooterUI />);
        expect(footerUI.find('Container')).toHaveLength(2);
    });
    
    it('renders Container with a Row', () => {
        const footerUI = shallow(<FooterUI />);
        expect(footerUI.find('Container').at(0).children().find('Row')).toHaveLength(1);
    });

    it('renders Nav', () => {
        const footerUI = mount(<FooterUI />);
        expect(footerUI.find('Container').at(0).children().find('Row').at(0).find('Col').at(0).find('Nav')).toHaveLength(0);
    });
   
 });