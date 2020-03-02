import styled from 'styled-components';
import { Alert } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BaseAlert = styled(Alert)`
  background-color: #fff;
  border-radius: unset;
  border-bottom-width: thick;
  border-bottom-color: #48d2a0;
  color: #000;
  padding: .75rem 10px;
  margin-bottom: 0;
  pointer-events: auto;
`;

export const SuccessAlert = styled(BaseAlert)`
  border-bottom-color: #48d2a0;
`;

export const WarningAlert = styled(BaseAlert)`
  border-bottom-color: #f8c51c;
`;

export const ErrorAlert = styled(BaseAlert)`
  border-bottom-color: #f55567;
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 25px;
`;

export const NotificationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const NotificationContent = styled.div`
  flex: 1;
  margin-left: 20px;
`;

export const CloseButton = styled.button`
  float: right;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: .5;
  border-width: 0;
  &:hover {
    color: #000;
    text-decoration: none;
    opacity: .75;
  }
`;


