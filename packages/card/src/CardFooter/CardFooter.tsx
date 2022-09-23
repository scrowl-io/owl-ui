import * as React from 'react';
import { CardFooterProps } from './CardFooter.types';
import { Card } from 'react-bootstrap';

export const CardFooter = (props: CardFooterProps) => {
  const { children } = props;

  return <Card.Footer {...props}>{children}</Card.Footer>;
};

export default {
  CardFooter,
};
