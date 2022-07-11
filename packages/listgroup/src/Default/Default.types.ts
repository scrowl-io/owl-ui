import * as bs from 'react-bootstrap';

export interface ListgroupItemProps {
  id: string;
  content: string;
  bsProps?: bs.ListGroupItemProps;
}

export interface ListgroupDefaultCommons {
  theme?: 'Default' | 'Dark';
  prefix?: string;
  items: ListgroupItemProps[];
}

export type ListgroupDefaultProps = ListgroupDefaultCommons & bs.ListGroupProps;
