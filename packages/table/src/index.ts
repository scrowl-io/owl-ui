import * as BodyTable from './Body/index';
import * as CellTable from './Cell/index';
import * as DefaultTable from './Default/index';
import * as RowTable from './Row/index';

export const Body = BodyTable.component;
export const BodyTypes = BodyTable.types;
export const Cell = CellTable.component;
export const CellTypes = CellTable.types;
export const Default = DefaultTable.component;
export const DefaultTypes = DefaultTable.types;
export const Row = RowTable.component;
export const RowTypes = RowTable.types;

export default {
  Body,
  BodyTypes,
  Cell,
  CellTypes,
  Default,
  DefaultTypes,
  Row,
  RowTypes,
};
