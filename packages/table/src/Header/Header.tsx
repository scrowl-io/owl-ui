import * as React from 'react';
import { TableHeaderProps } from './Header.types';
import * as styles from './styles.module.scss';

const baseClass = 'owluiTableHeader';

export const Component = (props: TableHeaderProps) => {
  const { columns } = props;
  const localProps = Object.assign({}, props);

  localProps.className = Object.prototype.hasOwnProperty.call(
    localProps,
    'className'
  )
    ? `${styles[baseClass]} ${localProps.className}`
    : styles[baseClass];

  const renderColumns = () => {
    if (columns) {
      return columns.map(column => <th key={column.label}>{column.label}</th>);
    }
  };

  return (
    <thead className={localProps.className}>
      <tr>{renderColumns()}</tr>
    </thead>
  );
};

export default {
  Component,
};
