import * as React from 'react';
import { Card } from 'react-bootstrap';
import { CardImgProps } from './CardImg.types';

export const Component = (props: CardImgProps) => {
  const { children } = props;

  return (
    <Card.Img {...props} bsPrefix="owlui-card-img">
      {children}
    </Card.Img>
  );
};

export default {
  Component,
};
