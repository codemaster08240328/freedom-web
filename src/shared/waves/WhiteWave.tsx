import React, { Component } from 'react';
import styled from 'styled-components';


const Wave = styled.div`
    overflow: hidden;
    position: absolute;
    width: 100%;
    top: -100px;
    height: 100px;
    z-index: -1;
`;

const Waves = styled.span`
    background: url('/static/img/patterns/white-wave.svg') repeat-x;
    background-position: center bottom;
    position: absolute;
    top: 40px;
    width: 6400px;
    height: 100px;
    @media (min-width: 700px) {
      top: 18px;
      background-position: initial;
     }
`;


export default class WhiteWave extends Component {
  render() {
    return (
        <Wave>
          <Waves/>
        </Wave>
    );
  }
}


