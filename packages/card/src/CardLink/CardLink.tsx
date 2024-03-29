import * as React from 'react';
import { Card } from 'react-bootstrap';
import { CardLinkProps } from './CardLink.types';

export const CardLink = (props: CardLinkProps) => {
  const { children } = props;

  return (
    <Card.Link {...props} bsPrefix="owlui-card-link">
      {children}
    </Card.Link>
  );
};

export default {
  CardLink,
};
