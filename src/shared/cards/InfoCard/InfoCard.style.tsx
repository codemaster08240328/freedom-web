import styled from 'styled-components';
import { Img } from '../../ImgView';
import Card from '../Card';

export const ImgStyled = styled(Img)`
    height: 55px;
    width: auto;
    margin: 0 auto 1.5em;
`;

export const InfoCardContainer = styled(Card)`
  padding: 1em;
  text-align: center;
  max-width: 600px;
  min-height: 130px;
  flex-direction: column;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px auto 3em;
  box-shadow: 0 4px 4px 0 #E2E2E2;
  &::after{
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    margin-left: -0.5em;
    bottom: -1.9em;
    left: 50%;
    box-sizing: border-box;
    border: 1em solid black;
    border-color: transparent transparent #FFFFFF #FFFFFF;
    transform-origin: 0 0;
    transform: rotate(-45deg);
    box-shadow: -3px 4px 4px 0 #E2E2E2;
  }
   @media (min-width: 700px) {
   padding: 3em 2em;
   margin-top: 80px;
  }
`;