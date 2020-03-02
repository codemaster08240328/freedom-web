import { Field, Form, Formik } from 'formik';
import * as React from 'react';

import store from './store';
import { IPerson } from './types';
import { Router } from '@routes';

class NewPerson extends React.Component {
  render() {
    const initialValues: IPerson = {
      age: 0,
      firstName: '',
      lastName: ''
    };
    return (
      <Formik initialValues={initialValues} onSubmit={this.submit}>
        <Form>
          <Field placeholder="firstName" name="firstName" />
          <Field placeholder="lastName" name="lastName" />
          <Field placeholder="age" name="age" />
          <button type="submit">Save</button>
        </Form>
      </Formik>
    );
  }

  private submit = async values => {
    await store.createPerson(values);
    await Router.pushRoute('peopleOverview');
  };
}

export default NewPerson;
