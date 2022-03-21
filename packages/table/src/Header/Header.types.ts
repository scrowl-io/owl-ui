import type { TableDefaultProps } from '../Default/Default.types';

type HeaderColumn = {
  label: string;
};

export type TableHeaderCommons = TableDefaultProps & {
  columns: HeaderColumn[] | undefined;
};

export type TableHeaderProps = Partial<TableHeaderCommons>;
