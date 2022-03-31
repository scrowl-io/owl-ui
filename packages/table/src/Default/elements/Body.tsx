import * as React from 'react';
import * as styles from './styles.module.scss';
import { TableBodyProps } from '../Default.types';
import Row from './Row';
import { getCssModClass } from '@owlui/utils';

const baseClass = 'owluiTableBody';

const Body = (props: TableBodyProps) => {
  const { items, columns } = props;
  const localProps = Object.assign({}, props);

  localProps.className = getCssModClass({ localProps, baseClass, styles });

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
