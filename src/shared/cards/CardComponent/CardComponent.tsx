import React from 'react';
import { CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';

import { Img } from '../../ImgView';
import Card from '../Card';

export interface IProps {
  imageIcon: any;
  title: string;
  subTitle?: string;
  desc: string;
}

class CardComponent extends React.Component<IProps, any> {
  render() {
    const { imageIcon, title, subTitle, desc, ...props } = this.props;
    return (
      <React.Fragment>
        <Card {...props}>
          <Img src={imageIcon} />
          <CardBody>
            <CardTitle className="mb-3">{title}</CardTitle>
            {subTitle && <CardSubtitle>{subTitle}</CardSubtitle>}
            {desc && <CardText>{desc}</CardText>}
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default CardComponent;
