import * as React from 'react';
import { RowItem, TableRowProps } from './Row.types';
import { component as Cell } from '../Cell/index';
import * as styles from './styles.module.scss';

const baseClass = 'owluiTableRow';

export const Component = (props: TableRowProps) => {
  const { item } = props;
  const localProps = Object.assign({}, props);

  localProps.className = Object.prototype.hasOwnProperty.call(
    localProps,
    'className'
  )
    ? `${styles[baseClass]} ${localProps.className}`
    : styles[baseClass];

  const renderColums = (item: RowItem | undefined) => {
    const columns = [];

    for (const key in item) {
      if (Object.prototype.hasOwnProperty.call(item, key)) {
        columns.push(<Cell key={key}>{item[key]}</Cell>);
      }
    }

    return columns;
  };

  return <tr className={localProps.className}>{renderColums(item)}</tr>;
};

export default {
  Component,
};
