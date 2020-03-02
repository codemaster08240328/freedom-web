import * as React from 'react';
import { observer } from 'mobx-react';
import { Col, CustomInput, Row, Table } from 'reactstrap';

import { PolicyStore } from '../store';
import { IPolicy, PolicyList } from '../types';
import { routeConfig as routes } from '../../../constants/routeConfig';
import { Link } from '../../../../routes';
import SearchFilter from '../SearchFilter';
import { filterData } from '../../../helpers/helper';
import { Button, CheckboxTD, CheckboxTH, Container, LabelTag, StatusData, TD, TH, TR } from './Overview.style';

export interface IPoliciesOverviewProps {
  store: PolicyStore;
}

@observer
export default class PoliciesOverview extends React.Component<IPoliciesOverviewProps> {

  onSortColumn = (key) => () => {
    const { sortField } = this.props.store;

    sortField(key);
  };

  onCheck = (ind) => (event) => {
    event.stopPropagation();
  };

  renderPoliciesList = (policies: PolicyList): JSX.Element => {
    if (!policies || policies.length === 0) {
      return <p>No policies</p>;
    }
    const { showFields, sortFields } = this.props.store;
    const filteredPolicies = filterData(policies, sortFields, 'asc');

    return (
      <Table borderless={true} striped={true}>
        <thead>
        <TR>
          {Object.keys(showFields).map(
            (key: string, ind: number): JSX.Element => {
              const field = showFields[key];

              if (!field.active) {
                return <React.Fragment key={key}/>;
              }
              if (field.key === 'checkbox') {
                return <CheckboxTH key={key}>
                  <CustomInput
                    type="checkbox"
                    id="checkHead"
                    label=""
                  />
                </CheckboxTH>;
              }
              if (field.key === 'tags') {
                return <TH key={key}>Tags</TH>;
              }
              if (field.key === 'name') {
                return <TH
                  key={key}
                  onClick={this.onSortColumn('firstName')}
                >
                  Name
                </TH>;
              }
              return (
                <TH
                  key={key}
                  onClick={this.onSortColumn(field.key)}
                >
                  {field.text}
                </TH>);
            }
          )}
        </TR>
        </thead>
        <tbody>
        {filteredPolicies.map(
          (policy: IPolicy): JSX.Element => (
            <Link
              route={routes.policyDetail.name}
              params={{ id: policy.id }}
              key={policy.id}
            >
              <TR>
                {Object.keys(showFields).map(
                  (key: string, ind: number): JSX.Element => {
                    const field = showFields[key];

                    if (!field.active) {
                      return <React.Fragment key={key}/>;
                    }
                    if (field.format) {
                      return (
                        <TD key={key}>
                          {field.format(policy[field.key])}
                        </TD>
                      );
                    }
                    if (field.key === 'checkbox') {
                      return <CheckboxTD key={key} onClick={this.onCheck(ind)}>
                        <CustomInput
                          type="checkbox"
                          id={policy.id}
                          label=""
                        />
                      </CheckboxTD>;
                    }
                    if (field.key === 'name') {
                      return (
                        <TD key={key}>
                          {policy.firstName} {policy.lastName}
                        </TD>);
                    }
                    if (field.key === 'status') {
                      return <TD key={key}>
                        <StatusData active={policy[field.key] === 'active'}>
                          <span/>
                          {policy[field.key]}
                        </StatusData>
                      </TD>;
                    }
                    if (field.key === 'tags') {
                      return <TD key={key}>
                        <LabelTag>
                          Label
                        </LabelTag>
                      </TD>;
                    }
                    return (
                      <TD key={key}>
                        {policy[field.key]}
                      </TD>);
                  }
                )}
              </TR>
            </Link>
          )
        )}
        </tbody>
      </Table>
    );
  };

  render() {
    const {
      showFields,
      sortFields,
      nextPolicyPage,
      prevPolicyPage,
      searchPolicy,
      changeFields,
      getAllPoliciesResult
    } = this.props.store;

    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col>
              <h1 className="text-center">Policies Overview</h1>
            </Col>
          </Row>
          <Row>
            <SearchFilter
              showFields={showFields}
              sortFields={sortFields}
              changeFields={changeFields}
              searchPolicy={searchPolicy}
            />
          </Row>
          <Row>
            <Col>
              <div className="Policy__List">
                {getAllPoliciesResult.case !== undefined && getAllPoliciesResult.case({
                  pending: () => <div>Loading...</div>,
                  rejected: error => <div>Ooops.. {error}</div>,
                  fulfilled: () => this.renderPoliciesList(this.props.store.policies)
                })}
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={4} md={{ size: 4, offset: 2 }}>
              <Button
                onClick={prevPolicyPage}
                primary={true}
                id="prevButton"
              >
                Prev
              </Button>
            </Col>
            <Col sm={4} md={4}>
              <Button
                onClick={nextPolicyPage}
                primary={true}
                id="nextButton"
              >
                Next
              </Button>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
