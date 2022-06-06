import * as React from 'react';
import { Card } from 'react-bootstrap';
import { CardTextProps } from './CardText.types';

export const Component = (props: CardTextProps) => {
  const { children } = props;

  return <Card.Text {...props}>{children}</Card.Text>;
};

export default {
  Component,
};
