import type { TableDefaultProps } from '../Default/Default.types';

export type RowItem = {
  [key: string]: string | number | boolean;
};

export type TableRowCommons = TableDefaultProps & {
  item: RowItem;
};

export type TableRowProps = Partial<TableRowCommons>;
