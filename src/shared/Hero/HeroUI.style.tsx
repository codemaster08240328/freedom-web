import styled from 'styled-components';

export const HeroGeneric = styled.section`
  background: #FF0000;
  align-items: center;
  justify-content: center;
  position: relative;
  color: #FFFFFF;
  width: 100vw;
  display: flex;
  h1 {
  font-size: 60px;}
`;

export const HeroMobileView = styled(HeroGeneric)`
  height: 100vh;
`;

export const HeroDeskView = styled(HeroGeneric)`
  height:80vh;
  width: 100vw;
  .align-middle {
    align-items: center;
  justify-content: center;
  }
`;
