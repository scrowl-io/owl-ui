import React from 'react';
import * as bs from 'react-bootstrap';

export interface ListgroupItemProps {
  id: string;
  content: string;
  variant: string;
}

export interface ListgroupDefaultCommons {
  theme?: 'Default' | 'Dark';
  size?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
  color?: boolean;
  items: ListgroupItemProps[];
}

export type ListgroupDefaultProps = ListgroupDefaultCommons & bs.ListGroupProps;
