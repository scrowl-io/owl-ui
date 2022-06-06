import * as React from 'react';
import { Card } from 'react-bootstrap';
import { CardHeaderProps } from './CardHeader.types';

export const Component = (props: CardHeaderProps) => {
  const { children } = props;

  return (
    <Card.Header {...props} bsPrefix="owlui-card-header">
      {children}
    </Card.Header>
  );
};

export default {
  Component,
};
