import React from 'react';
import * as bs from 'react-bootstrap';

export interface ListgroupItemProps {
  id: string;
  header: React.ReactNode | React.ReactNode[];
  description?: React.ReactNode;
  bsProps?: bs.ListGroupItemProps;
}

export interface ListgroupDefaultCommons {
  theme?: 'Default' | 'Dark';
  prefix?: string;
  items: ListgroupItemProps[];
}

export type ListgroupDefaultProps = ListgroupDefaultCommons & bs.ListGroupProps;
