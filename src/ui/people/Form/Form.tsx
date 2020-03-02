import React from 'react';
import { Field, Form as FormikForm, Formik } from 'formik';
import { Row, Col } from 'reactstrap';

import Input from '../../../shared/InputField';

import validationSchema from './validationSchema';
import { IPerson } from '../types';
import {
  Wrapper,
  StyledButton,
  HeaderWrapper,
  Title,
  LeftColContent,
  RightColContent,
  ColWithBorderRight,
  InputWrapper,
  FooterWrapper,
} from './Form.style';

interface IFormData {
  id: string,
  type: string,
  age: number,
  nationalIdNumber: string,
  fullName: string,
  mobileNumber: string,
  bankName: string,
  accountNumber: string,
  branchCode: string,
}

interface IProps {
  personData?: IPerson,
  onSubmit(formData: object): Promise<void>,
}

const inputTheme = {
  whiteTheme: true,
};

export default class Form extends React.Component<IProps> {
  static defaultProps = {
    personData: {},
  };

  initialValues: IFormData;

  constructor(props) {
    super(props);

    const { id, age, nationalIdNumber, fullName, mobileNumber, bankName, accountNumber, branchCode, type } = props.personData;

    this.initialValues = {
      id: id || '',
      type: type || '',
      age: age || 0,
      nationalIdNumber: nationalIdNumber || '',
      fullName: fullName || '',
      mobileNumber: mobileNumber || '',
      bankName: bankName || '',
      accountNumber: accountNumber || '',
      branchCode: branchCode || '',
    };
  }

  render() {
    return (
      <Wrapper>
        <Formik
          initialValues={this.initialValues}
          onSubmit={this.props.onSubmit}
          validationSchema={validationSchema}
        >
          <FormikForm>
            <Row noGutters={true}>
              <Col md="6">
                <Row noGutters={true}>
                  <ColWithBorderRight md="12">
                    <HeaderWrapper>
                      <Title>
                        Update {this.initialValues.type}
                      </Title>
                      <Title>
                        Age: {this.initialValues.age}
                      </Title>
                      {/* <Field
                        placeholder="Age"
                        component={Input}
                        name="age"
                        theme={inputTheme}
                      /> */}
                    </HeaderWrapper>
                  </ColWithBorderRight>
                  <Col md="12">
                    <LeftColContent>
                      <InputWrapper>
                        <Field
                          placeholder="ID Number"
                          component={Input}
                          name="nationalIdNumber"
                          theme={inputTheme}
                          hint="Some info copy here"
                        />
                      </InputWrapper>
                      <InputWrapper>
                        <Field
                          placeholder="Full Name"
                          component={Input}
                          name="fullName"
                          theme={inputTheme}
                          hint="Some info copy here"
                        />
                      </InputWrapper>
                      <InputWrapper>
                        <Field
                          placeholder="Mobile Number"
                          component={Input}
                          name="mobileNumber"
                          theme={inputTheme}
                          hint="Some info copy here"
                        />
                      </InputWrapper>
                    </LeftColContent>
                  </Col>
                </Row>
              </Col>
              <Col md="6">
                <Row noGutters={true}>
                  <Col md="12">
                    <HeaderWrapper>
                      <Title>
                        Update Banking Details
                      </Title>
                    </HeaderWrapper>
                  </Col>
                  <Col md="12">
                    <RightColContent>
                      <InputWrapper>
                        <Field
                          placeholder="Bank Name"
                          component={Input}
                          name="bankName"
                          theme={inputTheme}
                          hint="Some info copy here"
                        />
                      </InputWrapper>
                      <InputWrapper>
                        <Field
                          placeholder="Account Number"
                          component={Input}
                          name="accountNumber"
                          theme={inputTheme}
                          hint="Some info copy here"
                        />
                      </InputWrapper>
                      <InputWrapper>
                        <Field
                          placeholder="Branch Code"
                          component={Input}
                          name="branchCode"
                          theme={inputTheme}
                          hint="Some info copy here"
                        />
                      </InputWrapper>
                    </RightColContent>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row noGutters={true}>
              <Col md="12">
                <FooterWrapper>
                  <StyledButton
                    primary={true}
                    type="submit"
                  >
                    UPDATE / CREATE
                  </StyledButton>
                </FooterWrapper>
              </Col>
            </Row>
          </FormikForm>
        </Formik>
      </Wrapper>
    );
  }
}