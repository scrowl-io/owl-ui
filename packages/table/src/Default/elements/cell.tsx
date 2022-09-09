import * as React from 'react';
import { TableCellProps } from '../Default.types';

export const Cell = (props: TableCellProps) => {
  return <td headers={props.header}>{props.children}</td>;
};

export default {
  Cell,
};
