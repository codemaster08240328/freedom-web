import React, { Component } from 'react';
import { ImgStyled, InfoCardContainer } from './InfoCard.style';

export interface IProps {
  imageIcon: string;
  desc: string;
}

class InfoCard extends Component<IProps> {
  render() {
    const {imageIcon, desc} = this.props;
    return (
      <InfoCardContainer>
        <ImgStyled src={imageIcon} />
        {desc}
      </InfoCardContainer>
    );
  }
}

export default InfoCard;
