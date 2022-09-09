import * as React from 'react';
import { TableBodyProps } from '../Default.types';
import { Row } from './row';

export const Body = (props: TableBodyProps) => {
  return (
    <tbody>
      {props.items.map((item, idx) => {
        return <Row key={idx} item={item} columns={props.columns} />;
      })}
    </tbody>
  );
};

export default {
  Body,
};
