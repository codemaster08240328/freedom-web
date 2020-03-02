import { Router } from 'next-routes';
import { withRouter } from 'next/router';
import * as React from 'react';

import Detail from '../../src/ui/people/Detail';
import store, { PeopleStore } from '../../src/ui/people/store';
import { IPerson } from '@src//ui/people/types';

interface IProps {
  router: Router;
  store: PeopleStore;
}

class PersonDetail extends React.Component<IProps> {
  // noinspection JSUnusedGlobalSymbols
  static async getInitialProps(ctx) {
    const person: IPerson = { ...(ctx.query as any) };

    await store.selectPerson(person.id);
    return { store };
  }

  render() {
    return <Detail store={store} person={store.selectedPerson} />;
  }
}

export default withRouter(PersonDetail);
