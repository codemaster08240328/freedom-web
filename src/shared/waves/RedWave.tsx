import { observer } from 'mobx-react';
import React, { Component } from 'react';
import styled from 'styled-components';

const WaveOne = '/static/img/patterns/wave-one.svg';
const WaveTwo = '/static/img/patterns/wave-two.svg';
const WaveThree = '/static/img/patterns/wave-three.svg';

const Wave = styled.div`
  overflow: hidden;
  position: absolute;
  width: 100%;
  bottom: -48px;
  height: 48px;
  z-index: -1;
`;

const Waves = styled.div`
  span {
    background: url(${WaveOne}) repeat-x;
    position: absolute;
    top: 0;
    width: 6400px;
    height: 48px;
    animation: wave 40s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
    transform: translate3d(0, 0, 0);
  }
  span:nth-of-type(2) {
    background: url(${WaveTwo}) repeat-x;
    animation: wave 20s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite, swell 20s ease -2.25s infinite;
  }
  span:nth-of-type(3) {
    background: url(${WaveThree}) repeat-x;
    animation: wave 10s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.225s infinite, swell 15s ease -1.25s infinite;
  }

  @keyframes wave {
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: -1600px;
    }
  }

  @keyframes swell {
    0%,
    100% {
      transform: translate3d(0, -16px, 0);
    }
    50% {
      transform: translate3d(0, 0, 0);
    }
  }
`;

@observer
class RedWave extends Component {
  render() {
    return (
      <Wave>
        <Waves>
          <span />
          <span />
          <span />
        </Waves>
      </Wave>
    );
  }
}

export default RedWave;
