import * as React from 'react';
import { ListGroup } from 'react-bootstrap';
import { CardListItemProps } from './CardListItem.types';

export const Component = (props: CardListItemProps) => {
  const { children } = props;

  return (
    <ListGroup.Item {...props} bsPrefix="owlui-list-group-item">
      {children}
    </ListGroup.Item>
  );
};

export default {
  Component,
};
