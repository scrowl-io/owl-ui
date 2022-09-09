import * as React from 'react';
import { TableRowProps } from '../Default.types';
import { Cell } from './cell';

export const Row = (props: TableRowProps) => {
  return (
    <tr>
      {props.columns.map((col, idx) => {
        return (
          <Cell key={idx} header={col.field}>
            {props.item[col.field]}
          </Cell>
        );
      })}
    </tr>
  );
};

export default {
  Row,
};
