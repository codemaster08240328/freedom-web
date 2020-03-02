import React from 'react';
import { observer } from 'mobx-react';
import { Formik, Form, Field } from 'formik';
import { Row, Col } from 'reactstrap';
import { Collapse } from 'react-collapse';
import { IPolicyField } from '../types';
import {
  SearchWrapper,
  SearchHeader,
  SearchFilterBody,
  SearchBody,
  SearchInputField,
  SearchDropdown,
  SearchButton,
  HeaderTitle,
  ArrowIcon
} from './SearchFilter.style';
const ArrowUp = '/static/img/icons/arrow-up.svg';
const ArrowDown = '/static/img/icons/arrow-down.svg';

export interface IProps {
  btnText?: string;
  showFields: IPolicyField;
  sortFields: IPolicyField;
  changeFields(type: boolean): any;
  searchPolicy(keyword: string): void;
}

@observer
class SearchFilter extends React.Component<IProps, any> {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: true
    };
  }

  toggleFilter = () => {
    this.setState(prevState => ({
      isOpened: !prevState.isOpened
    }));
  };

  render() {
    const {
      showFields,
      sortFields,
      changeFields,
    } = this.props;
    const { isOpened } = this.state;

    return (
      <SearchWrapper>
        <SearchHeader onClick={this.toggleFilter}>
          <HeaderTitle>
            Search Client
          </HeaderTitle>
          <ArrowIcon src={isOpened? ArrowUp : ArrowDown} />
        </SearchHeader>
        <Collapse isOpened={isOpened}>
          <SearchFilterBody>
            <SearchBody>
              <Formik
                onSubmit={this.onSearch}
                initialValues={{policy: ''}}>
                <Form>
                  <Row>
                    <Col sm={6} md={4}>
                      <Field
                        label=''
                        type='string'
                        name='policy'
                        placeholder='Search for Policy'
                        component={SearchInputField}
                      />
                    </Col>
                    <Col sm={6} md={4}>
                      <SearchDropdown
                        btnText="Show only"
                        fields={showFields}
                        changeFields={changeFields(true)}
                        id="showField_dropdown"
                       />
                    </Col>
                    <Col sm={6} md={4}>
                      <SearchDropdown
                        btnText="Sort by"
                        fields={sortFields}
                        changeFields={changeFields(false)}
                       />
                    </Col>
                    <Col sm={6} md={4}>
                      <SearchButton
                        primary={true}
                        type="submit"
                      >
                        Search Policy
                      </SearchButton>
                    </Col>
                  </Row>
                </Form>
              </Formik>
            </SearchBody>
          </SearchFilterBody>
        </Collapse>
      </SearchWrapper>
    );
  }

  private onSearch = () => {
    console.log('serching ....');
  }
}

export default SearchFilter;