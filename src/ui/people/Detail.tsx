import { Field, Form, Formik } from 'formik';
import { observer } from 'mobx-react';
import * as React from 'react';

import store, { PeopleStore } from './store';
import { IPerson } from './types';
import { Link, Router } from '@routes';

interface IProps {
  person: IPerson;
  edit?: boolean;
  store?: PeopleStore;
}

@observer
class PersonDetail extends React.Component<IProps> {
  render() {
    const { person, edit } = this.props;

    if (!person) {
      return <span>No person</span>;
    }

    if (edit) {
      return (
        <Formik initialValues={person} onSubmit={this.submit}>
          <Form>
            <Field name="firstName" />
            <Field name="lastName" />
            <Field type="number" name="age" />
            <button type="submit">Save</button>
          </Form>
        </Formik>
      );
    }

    return (
      <React.Fragment>
        <pre>{JSON.stringify(person, null, 2)}</pre>
        <Link route="personEdit" params={{ id: person.id }}>
          <button>Edit</button>
        </Link>
      </React.Fragment>
    );
  }

  private submit = async values => {
    await store.updatePerson(values);
    await Router.pushRoute('peopleOverview');
  };
}

export default PersonDetail;
