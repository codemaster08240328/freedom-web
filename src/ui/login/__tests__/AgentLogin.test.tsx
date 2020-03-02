/* eslint-env jest */
import React from 'react';
import { render, shallow, mount } from 'enzyme';
import AgentLoginView from '../AgentLogin.view';
import 'jest-styled-components';
import { Formik } from 'formik';
import { validationSchema } from '../validationSchema';
import { AuthStore } from '../store';
import { InputLabel } from '../AgentLogin.style';

describe('AgentLogin', () => {
  it('Component should match snapshot', () => {
    const store = new AuthStore();
    const login = shallow(<AgentLoginView
      submitting={false}
      state="fulfilled"
      values={store.credentials}
    />);

    expect(login).toMatchSnapshot();
  });

  it('Component should match snapshot', () => {
    const store = new AuthStore();
    const login = shallow(<AgentLoginView
      submitting={false}
      state="pending"
      values={store.credentials}
    />);

    expect(login).toMatchSnapshot('Agent login with spinner');
  });

  it('Should have email and password labels before touch them', () => {
    const store = new AuthStore();
    store.login = jest.fn();
    const login = mount(
      <Formik
        initialValues={store.credentials}
        onSubmit={store.login}
        validationSchema={validationSchema}
      >
        {(props) => <AgentLoginView {...props}/>}
      </Formik>);

    expect(login.find(InputLabel).length).toBe(2);
    expect(login.find(InputLabel).at(0).text()).toBe('Email Address');
    expect(login.find(InputLabel).at(1).text()).toBe('Some info copy here');
  });
});
