/* eslint-env jest */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import 'jest-styled-components';

import Footer from '../Footer.view';
import { DialStore } from '../../store';

describe("Dial footer", () => {
  it('Component should match snapshot', () => {
    const store = new DialStore();
    const footer = shallow(<Footer store={store}/>);
    expect(footer).toMatchSnapshot();
  });
  it('Should contain start call button', () => {
    const store = new DialStore();
    const footer = render(<Footer store={store}/>);

    expect(footer.find('#dialFooterStartCallButton').length).toBe(1);
  });

  it('Should contain end call button', () => {
    const store = new DialStore();
    const footer = render(<Footer store={store}/>);

    expect(footer.find('#dialFooterEndCallButton').length).toBe(1);
  });

  it('Should contain park call button', () => {
    const store = new DialStore();
    const footer = render(<Footer store={store}/>);

    expect(footer.find('#dialFooterParkCallButton').length).toBe(1);
  });

  it('Should call start call action', () => {
    const store = new DialStore();
    const stateMethod = jest.fn();
    store.startCall = stateMethod;

    const footer = shallow(<Footer store={store}/>);
    footer.find('#dialFooterStartCallButton').simulate('click');

    expect(stateMethod).toHaveBeenCalled();
  });

  it('Should call end call action', () => {
    const store = new DialStore();
    const stateMethod = jest.fn();
    store.endCall = stateMethod;

    const footer = shallow(<Footer store={store}/>);
    footer.find('#dialFooterEndCallButton').simulate('click');

    expect(stateMethod).toHaveBeenCalled();
  });

  it('Should call park call action', () => {
    const store = new DialStore();
    const stateMethod = jest.fn();
    store.parkCall = stateMethod;

    const footer = shallow(<Footer store={store}/>);
    footer.find('#dialFooterParkCallButton').simulate('click');

    expect(stateMethod).toHaveBeenCalled();
  });
});

