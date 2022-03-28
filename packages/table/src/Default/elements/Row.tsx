import * as React from 'react';
import Cell from './Cell';
import * as styles from './styles.module.scss';
import { TableRowProps, TableRowItem, TableColumnItem } from '../Default.types';

const baseClass = 'owluiTableRow';

const Row = (props: TableRowProps) => {
  const { item, columns } = props;
  const localProps = Object.assign({}, props);

  localProps.className = Object.prototype.hasOwnProperty.call(
    localProps,
    'className'
  )
    ? `${styles[baseClass]} ${localProps.className}`
    : styles[baseClass];

  const renderColums = (item: TableRowItem) => {
    let key = '';

    return columns.map((column: TableColumnItem, index: number) => {
      key = `${column.field}-${index}`;

      return <Cell key={key}>{item[column.field]}</Cell>;
    });
  };

  return <tr className={localProps.className}>{renderColums(item)}</tr>;
};

export default Row;
