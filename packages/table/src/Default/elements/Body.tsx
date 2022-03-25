import * as React from 'react';
import * as styles from './styles.module.scss';
import { TableBodyProps } from '../Default.types';
import Row from './Row';

const baseClass = 'owluiTableBody';

const Body = (props: TableBodyProps) => {
  const { items, columns } = props;
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
        items.map((item, index) => (
          <Row key={index} item={item} columns={columns} />
        ))}
    </tbody>
  );
};

export default Body;
