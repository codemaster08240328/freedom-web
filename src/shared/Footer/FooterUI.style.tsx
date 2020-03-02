import styled from 'styled-components';
import { Img } from '../ImgView';

export const Footer = styled.footer`
  background-color: #2a2a2a;
  width: 100%;
  display: block;
  padding-top: 40px;
  position: relative;
  margin-top: 100px;
  .socialIcon {
    margin-right: 1rem;
  }
`;

export const FooterMain = styled.div`
  width: 100%;
  display: block;
  color: #ffffff;
  padding: 20px;
  .nav-link {
    font-weight: normal;
    font-size: 14px;
    padding-left: 0;
  }

  .nav a {
    color: #868686;
    transition: all 0.3s ease-in;
    line-height: 2;
    font-size: 14px;
    padding-bottom: 0.8rem;
    &:hover {
      color: #ffffff;
      text-decoration: none;
    }
  }
`;

export const FooterBase = styled.div`
  padding: 15px 0 0;
  width: 100%;
  display: block;
  background-color: #222222;
  p.copyRights {
    font-size: 11px;
    padding-top: 10px;
    color: #868686;
    font-weight: normal;
    line-height: 1.2;
    letter-spacing: 0.05rem;
  }
`;

export const ImgStyled = styled(Img)`
  height: 20px;
  text-align: center;
  display: flex;
`;

export const FooterWave = styled.div`
  overflow: hidden;
  position: absolute;
  width: 100%;
  top: -180px;
  height: 200px;
  z-index: -1;
`;

export const FooterWaves = styled.span`
  background: url('/static/img/patterns/footer-wave.png') repeat-x;
  position: absolute;
  top: 0;
  width: 6400px;
  height: 200px;
`;
