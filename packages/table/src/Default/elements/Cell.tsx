import * as React from 'react';
import * as styles from './styles.module.scss';
import { TableCellProps } from '../Default.types';

const baseClass = 'owluiTableCell';

const Cell = (props: TableCellProps) => {
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

export default Cell;
