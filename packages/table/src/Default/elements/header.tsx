import * as React from 'react';
import { TableHeaderProps } from '../Default.types';

export const Header = (props: TableHeaderProps) => {
  return (
    <thead>
      <tr>
        {props.columns.map((col, idx: number) => (
          <th scope="col" id={col.field} key={idx}>
            {col.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default {
  Header,
};
