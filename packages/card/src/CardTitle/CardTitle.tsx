import * as React from 'react';
import { Card } from 'react-bootstrap';
import { CardTitleProps } from './CardTitle.types';

export const Component = (props: CardTitleProps) => {
  const { children } = props;

  return <Card.Title {...props}>{children}</Card.Title>;
};

export default {
  Component,
};
