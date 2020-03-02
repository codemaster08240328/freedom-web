import React, { Component } from 'react';
import RedWave from '../waves/RedWave';
import { SubHeroDesktop } from './SubHeroUI.style';

class SubHeroUI extends Component {
  render() {
    return (
      <SubHeroDesktop>
        Inter page hero banner
        <RedWave/>
      </SubHeroDesktop>
    );
  }
}

export default SubHeroUI;