import * as React from 'react';
import { Card } from 'react-bootstrap';
import { CardBodyProps } from './CardBody.types';

export const CardBody = (props: CardBodyProps) => {
  const { children } = props;

  return <Card.Body {...props}>{children}</Card.Body>;
};

export default {
  CardBody,
};
