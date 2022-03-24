import * as React from 'react';
import Cell from './Cell';
import * as styles from './styles.module.scss';

const baseClass = 'owluiTableRow';

export type RowItem = {
  [key: string]: string | number | boolean;
};

type RowProps = React.TableHTMLAttributes<HTMLTableElement> & {
  item: RowItem;
};

const Row = (props: RowProps) => {
  const { item } = props;
  const localProps = Object.assign({}, props);

  localProps.className = Object.prototype.hasOwnProperty.call(
    localProps,
    'className'
  )
    ? `${styles[baseClass]} ${localProps.className}`
    : styles[baseClass];

  const renderColums = (item: RowItem) => {
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

export default Row;
