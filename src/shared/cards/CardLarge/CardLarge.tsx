
import React from 'react';
import { CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";
import Button from "../../buttons/Button";
import { ProductCard, ImgStyle } from './CardLarge.style';

export interface IProps {
  id: string;
  imageIcon: any;
  title: string;
  subTitle: string;
  desc: string;
  btnText: string;
}

class CardLarge extends React.Component<IProps, any> {
  render() {
    const {imageIcon, title, subTitle, btnText, desc, id, ...props} = this.props;
    return (
      <React.Fragment>
        <ProductCard {...props} id={id}>
          <ImgStyle src={imageIcon} />
          <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardSubtitle>{subTitle}</CardSubtitle>
            <CardText>{desc}</CardText>
            <Button>{btnText}</Button>
          </CardBody>
        </ProductCard>
      </React.Fragment>
    );
  }
}

export default CardLarge;
