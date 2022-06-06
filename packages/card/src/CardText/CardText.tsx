import * as React from 'react';
import { Card } from 'react-bootstrap';
import { CardTextProps } from './CardText.types';

export const Component = (props: CardTextProps) => {
  const { children } = props;

  return (
    <Card.Text {...props} bsPrefix="owlui-card-text">
      {children}
    </Card.Text>
  );
};

export default {
  Component,
};
