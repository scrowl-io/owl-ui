import * as React from 'react';
import { ListGroup } from 'react-bootstrap';
import { CardListGroupProps } from './CardListGroup.types';

export const Component = (props: CardListGroupProps) => {
  const { children } = props;

  return <ListGroup {...props}>{children}</ListGroup>;
};

export default {
  Component,
};
