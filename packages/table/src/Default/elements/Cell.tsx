import * as React from 'react';
import * as styles from './styles.module.scss';
import { TableCellProps } from '../Default.types';
import { getCssModClass } from '@owlui/utils';

const baseClass = 'owluiTableCell';

const Cell = (props: TableCellProps) => {
  const { children } = props;
  const localProps = Object.assign({}, props);

  localProps.className = getCssModClass({ localProps, baseClass, styles });

  return <td className={localProps.className}>{children}</td>;
};

export default Cell;
