import * as React from 'react';
import * as styles from './styles.module.scss';
import { TableHeaderProps } from '../Default.types';

const baseClass = 'owluiTableHeader';

const Header = (props: TableHeaderProps) => {
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

export default Header;
