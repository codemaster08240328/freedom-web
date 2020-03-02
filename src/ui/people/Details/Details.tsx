import React from 'react';
import { Col, Row } from 'reactstrap';
import moment from 'moment';

import { faHome, faMobileAlt, faUmbrella, faUserCheck } from '@fortawesome/free-solid-svg-icons';

import { faCalendarAlt, faClock, faCreditCard } from '@fortawesome/free-regular-svg-icons';

import WhiteButton from '../../../shared/buttons/WhiteButton';

import { IPerson } from '../types';
import {
  BeneficiaryBottomContainer,
  GrayIcon,
  OverflowWrapper,
  RedButton,
  StyledTable,
  TableHeaderContentWrapper,
  TableWrapper,
  Td,
  Th,
  Tr,
  YellowIcon
} from './Details.style';

const headerContentOffsetTheme = {
  align: 'right'
};

const tableBorderTheme = {
  borderRight: true
};

const cellOffsetLeftTheme = {
  offset: 'left'
};

const cellOffsetRightTheme = {
  offset: 'right'
};

const cellAlignTheme = {
  align: 'right'
};


interface IProps {
  personData: IPerson,
  removeEnabled: boolean,

  onRemove(person: IPerson): void,

  onUpdate(person: IPerson): void,
}

export default class DetailsView extends React.Component<IProps> {
  render() {
    const {
      personData,
      removeEnabled
    } = this.props;

    const {
      nationalIdNumber,
      fullName,
      mobileNumber,
      bankName,
      accountNumber,
      branchCode,
      age,
      date
    } = personData;

    return (
      <TableWrapper>
        <Row noGutters={true}>
          <Col md="12" lg="6">
            <StyledTable theme={tableBorderTheme}>
              <colgroup>
                <col width="15%"/>
                <col width="50%"/>
                <col width="35%"/>
              </colgroup>
              <thead>
              <Tr>
                <Th>
                  <TableHeaderContentWrapper>
                    <YellowIcon icon={faClock}/>
                  </TableHeaderContentWrapper>
                </Th>
                <Th>
                  <TableHeaderContentWrapper>
                    <OverflowWrapper>
                      {fullName}
                    </OverflowWrapper>
                  </TableHeaderContentWrapper>
                </Th>
                <Th>
                  <TableHeaderContentWrapper theme={headerContentOffsetTheme}>
                    <OverflowWrapper>
                      Age: {age}
                    </OverflowWrapper>
                  </TableHeaderContentWrapper>
                </Th>
              </Tr>
              </thead>
              <tbody>
              <Tr>
                <Td theme={cellOffsetLeftTheme}>
                  <GrayIcon icon={faUmbrella}/>
                </Td>
                <Td>
                  <OverflowWrapper>
                    ID number
                  </OverflowWrapper>
                </Td>
                <Td theme={{ ...cellOffsetRightTheme, ...cellAlignTheme }}>
                  <OverflowWrapper>
                    {nationalIdNumber}
                  </OverflowWrapper>
                </Td>
              </Tr>
              <Tr>
                <Td theme={cellOffsetLeftTheme}>
                  <GrayIcon icon={faMobileAlt}/>
                </Td>
                <Td>
                  <OverflowWrapper>
                    Mobile number
                  </OverflowWrapper>
                </Td>
                <Td theme={{ ...cellOffsetRightTheme, ...cellAlignTheme }}>
                  <OverflowWrapper>
                    {mobileNumber}
                  </OverflowWrapper>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <GrayIcon icon={faCalendarAlt}/>
                </Td>
                <Td>
                  <OverflowWrapper>
                    Date added
                  </OverflowWrapper>
                </Td>
                <Td theme={cellAlignTheme}>
                  <OverflowWrapper>
                    {moment(date).format('YYYY-MM-DD')}
                  </OverflowWrapper>
                </Td>
              </Tr>
              </tbody>
            </StyledTable>
          </Col>
          <Col md="12" lg="6">
            <StyledTable>
              <colgroup>
                <col width="15%"/>
                <col width="50%"/>
                <col width="35%"/>
              </colgroup>
              <thead>
              <Tr>
                <Th colSpan={3}>
                  <TableHeaderContentWrapper>
                    Banking details
                  </TableHeaderContentWrapper>
                </Th>
              </Tr>
              </thead>
              <tbody>
              <Tr>
                <Td theme={cellOffsetLeftTheme}>
                  <GrayIcon icon={faUserCheck}/>
                </Td>
                <Td>
                  <OverflowWrapper>
                    Bank name
                  </OverflowWrapper>
                </Td>
                <Td theme={cellOffsetRightTheme}>
                  <OverflowWrapper>
                    {bankName}
                  </OverflowWrapper>
                </Td>
              </Tr>
              <Tr>
                <Td theme={cellOffsetLeftTheme}>
                  <GrayIcon icon={faCreditCard}/>
                </Td>
                <Td>
                  <OverflowWrapper>
                    Account No.
                  </OverflowWrapper>
                </Td>
                <Td theme={cellOffsetRightTheme}>
                  <OverflowWrapper>
                    {accountNumber}
                  </OverflowWrapper>
                </Td>
              </Tr>
              <Tr>
                <Td theme={cellOffsetLeftTheme}>
                  <GrayIcon icon={faHome}/>
                </Td>
                <Td>
                  <OverflowWrapper>
                    Branch Code
                  </OverflowWrapper>
                </Td>
                <Td>
                  <OverflowWrapper>
                    {branchCode}
                  </OverflowWrapper>
                </Td>
              </Tr>
              </tbody>
            </StyledTable>
          </Col>
        </Row>
        <BeneficiaryBottomContainer>
          <WhiteButton disabled={!removeEnabled} onClick={this.handleRemove}>remove</WhiteButton>
          <RedButton onClick={this.handleUpdate}>update</RedButton>
        </BeneficiaryBottomContainer>
      </TableWrapper>
    );
  }

  private handleUpdate = () => {
    const { onUpdate, personData } = this.props;
    onUpdate(personData);
  };

  private handleRemove = () => {
    const { onRemove, personData } = this.props;
    onRemove(personData);
  };
}