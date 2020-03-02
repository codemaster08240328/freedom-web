import styled from 'styled-components';
import { Col } from 'reactstrap';

import Button from '../../../shared/buttons/Button';

export const Wrapper = styled.div`
  padding-bottom: 13px;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.11);
`;

export const StyledButton = styled(Button)`
  padding-left: 30px;
  padding-right: 30px;
  margin-top: 40px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 30px 0;
  border-bottom: solid 1px #f6f7f9;
`;

export const Title = styled.h3`
  font-family: "Eina03", sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.5px;
  color: #6b89a0;

  &:first-child {
    padding-left: 22px;
  }

  &:last-child {
    padding-right: 22px;
  }
`;

export const ColWithBorderRight = styled(Col)`
  border-right: 1px solid #eee;
`;

export const LeftColContent = styled(Col)`
  padding: 13px 14px 25px 19px;
  box-sizing: border-box;
  border-right: 1px solid #eee;
  border-bottom: solid 1px #eee;
`;

export const RightColContent = styled(Col)`
  padding: 13px 19px 25px 14px;
  box-sizing: border-box;
  border-bottom: solid 1px #eee;
`;

export const InputWrapper = styled.div`
  margin-bottom: 34px;

  &:last-child {
    margin-bottom: 0;
  }
`

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 16px;
`;
