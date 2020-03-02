import styled from 'styled-components';
import theme from 'styled-theming';

const einaFontFamily = 'font-family: "Eina03","robotoregular",sans-serif;';
const grayBlueColor = '#6b89a0';

export const Container = styled.div`
  padding-bottom: 100px;
`;

export const Header = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const HeaderText = styled.span`
  font-family: 'Eina03', sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.7px;
  color: #a9bbc9;
`;