import * as React from 'react';
import { Card } from 'react-bootstrap';
import { CardImgOverlayProps } from './CardImgOverlay.types';

export const Component = (props: CardImgOverlayProps) => {
  const { children } = props;

  return (
    <Card.ImgOverlay {...props} bsPrefix="owlui-card-img-overlay">
      {children}
    </Card.ImgOverlay>
  );
};

export default {
  Component,
};
