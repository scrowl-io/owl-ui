import * as React from 'react';
import { Card } from 'react-bootstrap';
import { CardLinkProps } from './CardLink.types';

export const Component = (props: CardLinkProps) => {
  const { children } = props;

  return <Card.Link {...props}>{children}</Card.Link>;
};

export default {
  Component,
};
