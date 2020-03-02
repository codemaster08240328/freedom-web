import styled from 'styled-components';
import theme from 'styled-theming';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Col, Row, DropdownToggle, Dropdown } from 'reactstrap'
import Button from '../../../../../shared/buttons/Button';

const einaFontFamily = 'font-family: "Eina03","robotoregular",sans-serif;';

const paymentInfoContainerBackgroundColor = theme('theme', {
  mainCallCenterTheme: '#ffffff'
});

const paymentInfoContainerBoxShadowColor = theme('theme', {
  mainCallCenterTheme: 'rgba(0, 0, 0, 0.11)'
});

export const PaymentInfoContainer = styled(Container)`
  background-color: ${paymentInfoContainerBackgroundColor};
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 ${paymentInfoContainerBoxShadowColor};
  padding: 0;
  margin: 0;
  width: 100%;
`;

export const PaymentInfoHeader = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 2px #f6f7f9;
  padding: 5px 15px 8px 19px;
  margin-bottom: 15px;
`;

const grayBlueColor = '#6b89a0';

const paymentInfoHeaderTextColor = theme('theme', {
  mainCallCenterTheme: `${grayBlueColor}`
});

export const PaymentInfoHeaderText = styled.h3`
  ${einaFontFamily};
  font-size: 22px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.6px;
  color: ${paymentInfoHeaderTextColor};
  margin: 0;
  padding: 0;
`;

const walletIconColor = theme('theme', {
  mainCallCenterTheme: `${grayBlueColor}`
});

const walletContainerBorderColor = theme('theme', {
  mainCallCenterTheme: '#d4d8df'
});

export const WalletIconContainer = styled.div`
  border-left: 1px solid ${walletContainerBorderColor};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 13px 0px 22px;
`;

export const HeaderIcon = styled(FontAwesomeIcon)` 
  font-size: 20px;
  color: ${walletIconColor};
`;

const listIconColor = theme('theme', {
  mainCallCenterTheme: '#a9bbc9'
});

const listRowBottomBorder = theme('theme', {
  mainCallCenterTheme: '#eeeeee'
});

export const ListRow = styled(Row)`
  padding: 10px 0px;
  margin: 0px 24px 0px 19px;
  border-bottom: 1px solid ${listRowBottomBorder};
`;

export const ListCol = styled(Col)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ListColIcon = styled(ListCol)`
  padding: 0;
  margin: 0;
  width: 30px;
  justify-content: center;
`;

export const ListColRight = styled(ListCol)`
  padding-right: 0;
`;

export const ListIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: ${listIconColor};
`;

const listTextColor = theme('theme', {
  mainCallCenterTheme: '#34495e'
});

export const ListText = styled.span`
  ${einaFontFamily}
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.4px;
  color: ${listTextColor};
  height: 20px;
  vertical-align: middle;
`;

export const ListColText = styled(ListCol)`
  padding-left: 12px;
`;

export const BankingDetailHeader = styled(PaymentInfoHeader)`
  margin-bottom: 0px;
  height: 50px;
`;

export const BankingDetailIconContainer = styled(WalletIconContainer)`
  border: none;
  padding-right: 17px;
  cursor: pointer;
`;

const updateButtonTextColor = theme('theme', {
  mainCallCenterTheme: '#ffffff'
});

const updateButtonBackgroundColor = theme('theme', {
  mainCallCenterTheme: '#2a648e'
});
const hoverColor = theme('theme', {
  mainCallCenterTheme: '#1e4c6d'
});
const hoverColorGradientParam = theme('theme', {
  mainCallCenterTheme: '#1e4c6d'
});

export const UpdateButton = styled(Button)`
  background-color: ${updateButtonBackgroundColor};
  width: calc(100% - 43px);
  height: 50px;
  color: ${updateButtonTextColor};
  margin: 12px 24px 16px 19px;
  cursor: pointer;
  &:hover {
    color: ${updateButtonTextColor};
    border-color: ${hoverColor};
    background: ${hoverColor} radial-gradient(circle, transparent 1%, ${hoverColorGradientParam} 1%) center/15000%;
  }
  &:active {
    opacity: 0.8;
    transition: opacity 0s;
  }
`;

export const UpdateButtonText = styled.span`
  ${einaFontFamily};
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 2.4px;
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
`;

const pencilIconColor = theme('theme', {
  mainCallCenterTheme: '#34495e'
});

export const PencilIconWrapper = styled.span`
  position: absolute;
  right: -4px;
  pointer-events: all;
  cursor: pointer;
`;

export const PencilIcon = styled(FontAwesomeIcon)`
  font-size: 16px;
  color: ${pencilIconColor};
`;

export const DropdownWrapper = styled(Dropdown)`
  position: static;
  width: 100%;
`;

export const DropdownToggleWrapper = styled(DropdownToggle)`
  background: transparent;
  pointer-events: none;
  border: none;
`;

export const DropdownMenuWrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 0;
`;