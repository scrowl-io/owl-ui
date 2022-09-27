import * as React from 'react';
import { Card } from 'react-bootstrap';
import { CardImgProps } from './CardImg.types';

export const CardImg = (props: CardImgProps) => {
  const { children } = props;

  return <Card.Img {...props}>{children}</Card.Img>;
};

export default {
  CardImg,
};
