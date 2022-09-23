import * as React from 'react';
import { ListGroup, ThemeProvider } from 'react-bootstrap';
import { CardListGroupProps } from './CardListGroup.types';

export const CardListGroup = (props: CardListGroupProps) => {
  const { children } = props;

  return (
    <ThemeProvider
      prefixes={{
        'list-group': 'owlui-list-group',
        'list-group-item': 'owlui-list-group-item',
      }}
    >
      <ListGroup {...props}>{children}</ListGroup>
    </ThemeProvider>
  );
};

export default {
  CardListGroup,
};
