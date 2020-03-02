import { Router } from 'next-routes';
import { withRouter } from 'next/router';
import * as React from 'react';

import Detail from '../../src/ui/people/Detail';
import PeopleStore from '../../src/ui/people/store';
import { IPerson } from '@src//ui/people/types';

interface IProps {
  router: Router;
  person?: IPerson;
}

class PersonDetail extends React.Component<IProps> {
  // noinspection JSUnusedGlobalSymbols
  static async getInitialProps(ctx): Promise<{ person: IPerson }> {
    const person: IPerson = { ...(ctx.query as any) };

    await PeopleStore.selectPerson(person.id);
    return { person: PeopleStore.selectedPerson };
  }

  render() {
    const { person } = this.props;

    return <Detail edit={true} person={person} />;
  }
}

export default withRouter(PersonDetail);
