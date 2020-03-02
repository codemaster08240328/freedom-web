import React, { Component } from 'react';
import styled from 'styled-components';
const Wave = styled.div`
   overflow: hidden;
    position: absolute;
    width: 100%;
    bottom: -110px;
    height: 200px;
    z-index: -1;
`;
const Waves = styled.div`
   background: url('/static/img/patterns/grey-wave.png') repeat-x;
      position: absolute;
      top: 0;
      min-width: 6400px;
      width: 100vw;
      height: 200px;
`;


export default class GreyWave extends Component {
  render() {
    return (
      <Wave>
        <Waves/>
      </Wave>
    );
  }
}

