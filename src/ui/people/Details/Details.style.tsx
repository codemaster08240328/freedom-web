import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from '../../../shared/buttons/Button';

export const DebugWrapper = styled.div`
  padding: 30px;
  background: #f6f7f9;
`;

export const StyledTable = styled.table`
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #eee;
  border-right: ${props => props.theme.borderRight ? '1px solid #eee' : '0'};
  border-radius: 4px;
  table-layout: fixed;
`;

StyledTable.defaultProps = {
  theme: {
    borderRight: false,
  }
}

export const Th = styled.th`
  padding: 9px 0 8px;
  border-bottom: 2px solid #f6f7f9;

  &:first-child {
    padding-left: 21px;
  }

  &:nth-child(2) {
    > div {
      padding-left: 15px;
      border-left: 1px solid #d4d8df;
    }
  }
`;

export const Tr = styled.tr`
  &:last-child {
    td > div {
      border-bottom: 0;
    }
  }
`;

export const Td = styled.td`
  position: relative;
  min-height: 54px;
  padding: 17px 0 14px 0;
  font-family: 'Eina03', sans-serif;
  font-size: 16px;
  line-height: normal;
  letter-spacing: 0.4px;
  color: #34495e;
  border-bottom: 1px solid #eee;

  ${props => props.theme.align && `
    text-align: ${props.theme.align};
  `}

  ${props => props.theme.offset && `
    &::before {
      content: '';
      position: absolute;
      left: ${props.theme.offset === 'left' ? '0' : 'calc(100% - 20px)'};
      bottom: ${props.theme.offset === 'left' ? '-2px' : '-1px'};
      width: 20px;
      height: 1px;
      background: #fff;
    }
  `}

  &:first-child {
    padding-left: 20px;
  }

  &:last-child {
    padding-right: 17px;
    border-right: 1px solid #eee;
  }
`;

Td.defaultProps = {
  theme: {
    offset: null,
    align: null,
  }
}

export const OverflowWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const TableHeaderContentWrapper = styled.div`
  max-height: 66px;
  padding: 20px 20px 25px 0;
  font-family: 'Eina03', sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.5px;
  color: #6b89a0;
  text-align: ${props => props.theme.align};
`;

TableHeaderContentWrapper.defaultProps = {
  theme: {
    align: 'left',
  }
};

export const YellowIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: #f8c51c;
`;

export const GrayIcon = styled(FontAwesomeIcon)`
  margin-right: ${props => props.theme.rightOffset}px;
  font-size: 20px;
  color: #a9bbc9;
`;

GrayIcon.defaultProps = {
  theme: {
    rightOffset: '0',
  }
};

export const BeneficiaryTopContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const BeneficiaryTitle = styled.h3`
  font-family: 'Eina03', sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.7px;
  color: #a9bbc9;
`;

export const BeneficiaryBottomContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 14px 16px 14px 21px;
`;

export const RedButton = styled(Button)`
  width: 170px;
  min-height: 50px;
  text-transform: uppercase;
  cursor: pointer;
`

RedButton.defaultProps = {
  primary: true,
};

export const TableWrapper = styled.div`
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.11);
`;
