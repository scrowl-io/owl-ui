import * as React from 'react';
import { TableBodyProps } from './Body.types';
import { component as TableRow } from '../Row/index';
import * as styles from './styles.module.scss';

const baseClass = 'owluiTableBody';

export const Component = (props: TableBodyProps) => {
  const { items } = props;
  const localProps = Object.assign({}, props);

  localProps.className = Object.prototype.hasOwnProperty.call(
    localProps,
    'className'
  )
    ? `${styles[baseClass]} ${localProps.className}`
    : styles[baseClass];

  return (
    <tbody className={localProps.className}>
      {items &&
        items.map((item, index) => <TableRow key={index} item={item} />)}
    </tbody>
  );
};

export default {
  Component,
};
