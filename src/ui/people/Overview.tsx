import { observer } from 'mobx-react';
import * as React from 'react';

import { PeopleStore } from './store';
import { IPeople, IPerson } from './types';

import { Link } from '@routes';
import { routeConfig as routes } from '../../constants/routeConfig';

export interface IProps {
  store: PeopleStore;
}

@observer
export default class PeopleOverview extends React.Component<IProps> {
  renderPeople = (people: IPeople): JSX.Element => {
    if (!people || people.length === 0) {
      return <p>No people</p>;
    }

    return (
      <ul>
        {people.map(
          (person: IPerson, index: number): JSX.Element => (
            <li key={index}>
              <Link route={routes.personDetail.name} params={{ id: person.id }}>
                <a>
                  {person.firstName} {person.lastName}
                </a>
              </Link>{' '}
              <Link route={routes.personEdit.name} params={{ id: person.id }}>
                <button>Edit</button>
              </Link>{' '}
              <button onClick={this.removePerson(person)}>Remove</button>
            </li>
          )
        )}
      </ul>
    );
  };

  render() {
    return (
      <div>
        <h1>People Overview</h1>
        <Link route={routes.personNew.name}>
          <a>New</a>
        </Link>
        <div className="People__Overview">
          {this.props.store.getAllPeopleResult.case({
            pending: () => <div>Loading...</div>,
            rejected: error => <div>Oops.. {error}</div>,
            fulfilled: () => this.renderPeople(this.props.store.people)
          })}
        </div>
      </div>
    );
  }

  private removePerson = (person: IPerson) => () => {
    // noinspection JSIgnoredPromiseFromCall
    this.props.store.removePerson(person);
  };
}
