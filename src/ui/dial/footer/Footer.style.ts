import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const footerBackgroundColor = theme('theme', {
  mainCallCenterTheme: '#FFFFFF'
});

export const FooterMainContainer = styled.div`
  height: 100px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${footerBackgroundColor};
  display: flex;
  justify-content: center;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 560px;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  padding: 0;
  width: 174px;
  height: 50px;
  border-radius: 3px;
  border: solid 1px #dddddd;
  background-color: #ffffff;
  cursor: pointer;
  box-sizing: content-box;
  display: flex;
  &:not(:disabled) {
    outline: none; 
    box-shadow: none;
  }
  &:hover {
   background: #ffffff radial-gradient(circle, transparent 10%, transparent 10%) center/15000%;
  }
  &:active {
    opacity: 0.7; 
  }
`;

const dialBackgroundColor = theme('theme', {
  mainCallCenterTheme: '#7ed321'
});

const iconWrapper = styled.div`
  height: 50px;
  width: 44px;
  justify-content: center;
  display: flex;
  align-items: center;
  position: relative;`;

export const DialIconContainer = styled(iconWrapper)`
  background-color: ${dialBackgroundColor};
`;

const iconColor = theme('theme', {
  mainCallCenterTheme: '#FFFFFF'
});

export const TextDialIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
  transform: rotate(90deg);
  color: ${iconColor};
`;

export const TextArrowIcon = styled(FontAwesomeIcon)`
  font-size: 16px;
  transform: rotate(315deg);
  position: absolute;
  top: 9px;
  right: 7px;
  color: ${iconColor};
`;

const endCallIconColor = theme('theme', {
  mainCallCenterTheme: '#fd2500'
});

export const EndCallIconContainer = styled(iconWrapper)`
  background-color: ${endCallIconColor}; 
`;

export const TextDialEndCallIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
  transform: rotate(180deg);
  color: ${iconColor};
`;

const buttonTextColot = theme('theme', {
  mainCallCenterTheme: '#34495e'
});

export const ButtonText = styled.div`
  display: flex;
  flex: 1;
  height: 50px;
  justify-content: center;
  align-items: center;
  font-family: "Eina03","robotoregular",sans-serif;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 2.4px;
  color: ${buttonTextColot};
`;

const volumeOffIconColor = theme('theme', {
  mainCallCenterTheme: '#f5a623'
});

export const VolumeOffIconContainer = styled(iconWrapper)`
  background-color: ${volumeOffIconColor}; 
`;

export const TextVolumeOffIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
  color: ${iconColor};
`;