import * as React from 'react';
import { Card } from 'react-bootstrap';
import { CardCardBodyProps } from './CardBody.types';

export const Component = (props: CardCardBodyProps) => {
  const { children } = props;

  return (
    <Card.Body {...props} bsPrefix="owlui-card-body">
      {children}
    </Card.Body>
  );
};

export default {
  Component,
};
