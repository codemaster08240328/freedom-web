import React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import {
  Row,
  Col,
  Modal
} from 'reactstrap';
import moment from 'moment';

import {
  Container,
  Header,
  HeaderText
} from './PeopleTabView.style';
import DetailsView from './Details';
import Form from './Form';

import WhiteButton from '../../shared/buttons/WhiteButton';
import { PeopleStore } from './store';
import { IPerson, PersonType } from './types';


interface IProps {
  store: PeopleStore
}

@observer
export default class PeopleTabView extends React.Component<IProps> {
  @observable modalOpen = false;
  @observable person = {};
  @observable categories;

  constructor(props) {
    super(props);

    this.categories = [
      { title: 'PolicyHolder Details', type: PersonType.POLICYHOLDER },
      { title: 'Beneficiary Details', type: PersonType.BENEFICIARY },
      { title: 'Dependants Details', type: PersonType.DEPENDANT },
      { title: 'Spouse Details', type: PersonType.SPOUSE }
    ];
  }

  createPressed = (type) => (e) => {
    this.person = { type, age: 0 };
    this.modalOpen = true;
  };

  updatePressed = (person) => (e) => {
    this.person = person;
    this.modalOpen = true;
  };

  removePressed = (person) => async (e) => {
    this.person = person;
    if (window.confirm('Do you really want to remove?')) {
      await this.props.store.removePerson(person);
    }
  };

  toggleModal = () => {
    this.modalOpen = !this.modalOpen;
  };

  onSubmit = async (values) => {
    // this.props.onPolicyHolderUpdate(values);
    const { updatePerson, createPerson } = this.props.store;
    if ( values.id ) { // update
      await updatePerson(values);
    } else { // create
      values.date = moment().format('YYYY-MM-DD');
      await createPerson(values);
    }
    this.toggleModal();
  };

  render() {
    const { people } = this.props.store;
    return(
      <Container>
      {
        this.categories.map(item => {
          const list = people.filter(person => person.type === item.type);
          const createVisibility = (item.type === PersonType.POLICYHOLDER) 
                                  || ( item.type === PersonType.BENEFICIARY && list.length === 1) 
                                  || (item.type === PersonType.DEPENDANT && list.length === 6) 
                                  || (item.type === PersonType.SPOUSE && list.length === 1);
          return (
            <React.Fragment key={item.type}>
              <Header>
                <HeaderText>
                  {item.title}
                </HeaderText>
                {
                  !createVisibility && (
                    <WhiteButton onClick={ this.createPressed(item.type) }>Create</WhiteButton>
                  )
                }
              </Header>
              {
                list.map(person => {
                  const removeEnabled = !(item.type === PersonType.POLICYHOLDER);
                  return (
                    <DetailsView
                      key={person.id}
                      personData={person}
                      removeEnabled={removeEnabled}
                      onUpdate={ this.updatePressed(person) }
                      onRemove={ this.removePressed(person) }
                    />
                  )
                })
              }
            </React.Fragment>
          )
        })
      }
      <Modal
        centered={true}
        size="lg"
        isOpen={this.modalOpen}
        toggle={this.toggleModal}
      >
        <Form
          personData={this.person as IPerson}
          onSubmit={this.onSubmit}
        />
      </Modal>
      </Container>
    );
  }
}