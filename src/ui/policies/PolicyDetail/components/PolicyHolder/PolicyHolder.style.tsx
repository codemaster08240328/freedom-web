import styled from 'styled-components';
import theme from 'styled-theming';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import {
  Container,
  Row,
  Col,
  Modal as BootstrapModal,
  ModalBody as BootstrapModalBody,
} from 'reactstrap';

const einaFontFamily = 'font-family: "Eina03","robotoregular",sans-serif;';

import Card from '../../../../../shared/cards/Card';
import Button from '../../../../../shared/buttons/Button';
import InputField from '../../../../../shared/InputField/index';


const listTextColor = theme('theme', {
  mainCallCenterTheme: '#34495e'
});

export const Wrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  min-height: 50px;
  width: 100%;
	border: none;
  margin-bottom: 20px;
`;

export const Top = styled(Container)`
  position: relative;
  border-bottom: 1px solid #e2e2e2;
  padding: 1rem 15px;
`;

export const Body = styled.div`
  flex: 1 1 auto;
  padding: 0 2rem;
  align-content: end;
  position: relative;
`;

export const Bottom = styled.div`
  flex: 1 1 auto;
  padding: 1rem 1rem;
  align-content: end;
  position: relative;
  display: flex;
`;

const grayBlueColor = '#6b89a0';

const paymentInfoHeaderTextColor = theme('theme', {
  mainCallCenterTheme: `${grayBlueColor}`
});

export const BigInfo = styled.span`
  flex: 1;
  ${einaFontFamily};
  font-size: 20px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.6px;
  color: ${paymentInfoHeaderTextColor};
  margin: 0;
  padding: 0;
`;

export const Info = styled.span`
  ${einaFontFamily}
  flex: 1;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.4px;
  color: ${listTextColor};
  height: 20px;
  vertical-align: middle;
  text-align: left;
`;

export const Input = styled(InputField)`
  flex: 1;
  font-size: 15px;
  text-align: left;
  padding: 0 10px;
  margin-bottom: 0;
  margin-top: 1rem;
`;

export const Select = styled.select`
  border-style: none;
  background-color: transparent;
  font-size: 15px;
  padding: 0 10px;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const IconContainer = styled.div`
  width: 24px;

`;
export const Icon = styled(FontAwesomeIcon)`
  margin: auto;
  font-size: 20px;
`;

export const LBorderCol = styled(Col)`
  border-left: 1px solid #d4d8df;
  text-align: center;
`;

export const UBorderCol = styled(Col)`
  border-bottom: 1px solid #d4d8df;
  padding: 10px 0;
  text-align: center;
  display: flex;
  align-items: center;
`;

export const UBorderFormCol = styled(Col)`
  border-bottom: 1px solid #d4d8df;
  text-align: center;
  padding: 0 0;
  display: flex;
  align-items: center;
`;

export const LButton = styled(Button)`
  flex: 1;
  margin-right: 1rem;
  color: #6c7887;
  border: 1px solid #6c7887;
  background-color: transparent;
`;

export const RButton = styled(Button)`
  flex: 1;
  color: #FFFFFF;
  border: 1px solid #FD2500;
  background-color: #FD2500;
`;