import * as React from 'react';
import { Card } from 'react-bootstrap';
import { CardHeaderProps } from './CardHeader.types';

export const CardHeader = (props: CardHeaderProps) => {
  const { children } = props;

  return <Card.Header {...props}>{children}</Card.Header>;
};

export default {
  CardHeader,
};
