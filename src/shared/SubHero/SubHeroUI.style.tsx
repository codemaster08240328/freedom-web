import styled from 'styled-components';

export const SubHeroDesktop = styled.div`
  background: #ff0000;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100px;
  width: 100vw;
  color: #ffffff;
  z-index: 1;
  @media (min-width: 700px) {
    height: 300px;
  }
`;
