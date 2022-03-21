import type { TableDefaultProps } from '../Default/Default.types';
import type { RowItem } from '../Row/Row.types';

export type TableBodyCommons = TableDefaultProps & {
  items: RowItem[];
};

export type TableBodyProps = Partial<TableBodyCommons>;
