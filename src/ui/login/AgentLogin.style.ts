import { Field } from 'formik';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import InputField from './components/InputField';
import Button from './components/Button';

const ActiveComponentBackgroundColor = theme('theme', {
  mainCallCenterTheme: '#FFF'
});

const PassiveComponentBackgroundColor = theme('theme', {
  mainCallCenterTheme: '#34495E'
});

export const AgentLoginComponentsWrapper = styled.div`
  position: relative;
  margin-top: 8rem;
  width: 70%;
  max-width: 750px;
  min-height: 450px;
  border-radius: 2px;
  display: flex;
  flex-direction: row;
`;

const SignInLabelTextColor = theme('theme', {
  mainCallCenterTheme: '#34495E'
});

export const SignInLabel = styled.span`
  color: ${SignInLabelTextColor};
  font-size: 28px;
  font-family: "Eina03","robotoregular",sans-serif;
`;

export const SignInBlockActive = styled.div`
  flex: 0.6;
  margin: 0;
  background-color: ${ActiveComponentBackgroundColor};
  padding: 3rem;
`;

export const SignUpBlock = styled.div`
  display: flex;
  flex: 0.4;
  width: 20%;
  margin: 0;
  padding: 0;
  background-color: ${PassiveComponentBackgroundColor};
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const SignInActiveInternalBlock = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

export const FakeElement = styled.div`
  height: 1px;
`;

const inputTextColor = theme('theme', {
  mainCallCenterTheme: '#5F5F5F'
});

const inputPlaceholderColor = theme('theme', {
  mainCallCenterTheme: '#7c8495'
});

const inputColors = theme('theme', {
  mainCallCenterTheme: css`
    color: ${inputTextColor};
    border-color: #dddddd;
  `
});

export const LoginField = styled(Field)`
  margin-top: 10px;
  width: 100%;
`;

export const LoginInputField = styled(InputField)`
  box-shadow: none;
  padding: 1.5rem 1rem;
  font-family: "Eina03", "robotoregular", sans-serif;
  font-size: 14px;
  ::-webkit-input-placeholder {
    font-size: 14px;
    color: ${inputPlaceholderColor};
  }
  ::-moz-placeholder {
    font-size: 14px;
    color: ${inputPlaceholderColor};
  }
  :-ms-input-placeholder {
    font-size: 14px;
    color: ${inputPlaceholderColor};
  }
  :-moz-placeholder {
    font-size: 14px;
    color: ${inputPlaceholderColor};
  }
  ${inputColors}
`;

const inputLabelColor = theme('theme', {
  mainCallCenterTheme: '#858585;'
});

export const InputLabel = styled.span`
  font-size: 11px;
  color: ${inputLabelColor};
  font-family: "Eina03", "robotoregular", sans-serif;
  letter-spacing: 0.2px;
`;

export const AgentLoginButton = styled(Button)`
  margin-top: 1rem;
  width: 150px;
  font-family: "Eina03-Bold", "robotoregular", sans-serif;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.2rem!important;
  float: right;
  height: 40px;
  border: none;
  border-radius: 2px;
`;

const headerBackgroundColor = theme('theme', {
  mainCallCenterTheme: '#FF0000;'
});

export const HeaderStyled = styled.div`
  width: 100vw;
  height: 60px;
  background-color: ${headerBackgroundColor};
`;

const LoginWrapperBackground = theme('theme', {
  mainCallCenterTheme: '#FCFCFD'
});

export const AgentLoginWrapper = styled.div`
  background: ${LoginWrapperBackground};
  position: absolute;
  top: 60px;
  left:0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 300px;
  bottom: 0;
`;

export const SpinnerWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 26px;
  height: 26px;
`;