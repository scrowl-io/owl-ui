import * as React from 'react';
import { Card } from 'react-bootstrap';
import { CardImgProps } from './CardImg.types';

export const Component = (props: CardImgProps) => {
  const { children } = props;

  return <Card.Img {...props}>{children}</Card.Img>;
};

export default {
  Component,
};
