import * as React from 'react';
import { Card } from 'react-bootstrap';
import { CardSubTitleProps } from './CardSubTitle.types';

export const CardSubTitle = (props: CardSubTitleProps) => {
  const { children } = props;

  return <Card.Subtitle {...props}>{children}</Card.Subtitle>;
};

export default {
  CardSubTitle,
};
