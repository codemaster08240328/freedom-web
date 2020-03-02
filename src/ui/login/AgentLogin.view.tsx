import * as React from 'react';
import { Form, FormikProps } from 'formik';
import { keys } from 'lodash';
import Spinner from './components/spinner/Spinner';

import { ILoginCredentials } from './types';
import {
  AgentLoginComponentsWrapper,
  AgentLoginButton,
  SpinnerWrapper,
  FakeElement,
  LoginField,
  LoginInputField,
  HeaderStyled,
  AgentLoginWrapper,
  InputLabel,
  SignInBlockActive,
  SignInLabel,
  SignUpBlock,
  SignInActiveInternalBlock,
} from './AgentLogin.style'

interface IProps extends FormikProps<ILoginCredentials> {
  state: string
}

export default class AgentLoginView extends React.Component<any & IProps> {
  showLabel = (key: string) => {
    const touchedKeys = keys(this.props.touched);
    const errorKeys = keys(this.props.errors);
    return !(errorKeys.includes(key) && touchedKeys.includes(key))
  };

  renderLoginButton = () => {
    const { state } = this.props;
    const pending = state === 'pending';
    return (
      <React.Fragment>
        {!pending && (
          <AgentLoginButton pending={pending} primary={true}>Login</AgentLoginButton>)}
        {pending && (
          <AgentLoginButton pending={pending} primary={true}>
            <SpinnerWrapper>
              <Spinner />
            </SpinnerWrapper>
          </AgentLoginButton>
        )}
      </React.Fragment>
    );
  };

  renderLogin = () => (
    <AgentLoginComponentsWrapper>
      <SignInBlockActive>
        <SignInActiveInternalBlock>
          <SignInLabel>Sign In</SignInLabel>
          <Form>
            <LoginField type="email" name="email" placeholder="User Name" component={LoginInputField}/>
            {this.showLabel('email') && (
              <InputLabel>Email Address</InputLabel>
            )}
            <LoginField type="password" name="password" placeholder="Password" component={LoginInputField}/>
            {this.showLabel('password') && (
              <InputLabel>Some info copy here</InputLabel>
            )}
            {this.renderLoginButton()}
          </Form>
          <FakeElement />
        </SignInActiveInternalBlock>
      </SignInBlockActive>
      <SignUpBlock/>
    </AgentLoginComponentsWrapper>
  );

  render() {
    return (
      <React.Fragment>
        <HeaderStyled />
        <AgentLoginWrapper>
          {this.renderLogin()}
        </AgentLoginWrapper>
      </React.Fragment>)
  }
}