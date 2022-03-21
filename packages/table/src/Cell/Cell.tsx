import * as React from 'react';
import { TableCellProps } from './Cell.types';
import * as styles from './styles.module.scss';

const baseClass = 'owluiTableCell';

export const Component = (props: TableCellProps) => {
  const { children } = props;
  const localProps = Object.assign({}, props);

  localProps.className = Object.defineProperty.hasOwnProperty.call(
    localProps,
    'className'
  )
    ? `${styles[baseClass]} ${localProps.className}`
    : styles[baseClass];

  return <td className={localProps.className}>{children}</td>;
};

export default {
  Component,
};
