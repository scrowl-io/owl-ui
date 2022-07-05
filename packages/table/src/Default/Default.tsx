import * as React from 'react';
import { Table, ThemeProvider } from 'react-bootstrap';
import {
  TableColumnItem,
  TableDefaultProps,
  TableRowItem,
} from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps } from '@owlui/lib/utils';

export const Component = (props: TableDefaultProps) => {
  const baseClass = 'table';
  const basePrefixClass = `owlui-${baseClass}`;
  const { tableData } = props;
  const prefix = props.prefix || '';

  const locals = createLocalProps(
    props,
    {
      module: styleMod,
      classes: {
        base: baseClass,
        prefix: prefix,
        optionals: [
          {
            fields: ['theme'],
            value: 'theme',
          },
          {
            fields: ['size'],
            value: 'Size',
          },
        ],
      },
    },
    ['prefix', 'theme', 'Size', 'tableData']
  );

  const Header = ({ columns }: { columns: TableColumnItem[] }) => (
    <thead>
      <tr>
        {columns.map(column => (
          <th scope="col" id={column.field} key={column.field}>
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );

  const ColElem = (
    item: TableRowItem,
    itemIndex: number,
    col: TableColumnItem
  ) => {
    return (
      <td headers={col.field} key={`${itemIndex} + ${col.field}`}>
        {item[col.field]}
      </td>
    );
  };

  const RowElem = (
    item: TableRowItem,
    index: number,
    columns: TableColumnItem[]
  ) => {
    let cols: React.ReactNode = [];

    cols = columns.map(col => {
      return ColElem(item, index, col);
    });

    return <tr key={index}>{cols}</tr>;
  };

  const BodyElem = (columns: TableColumnItem[], items: TableRowItem[]) => {
    let rows: React.ReactNode = [];

    if (items && items.length) {
      rows = items.map((item, index) => {
        return RowElem(item, index, columns);
      });
    }

    return <tbody>{rows}</tbody>;
  };

  const body = BodyElem(tableData.columns, tableData.items);

  return (
    <ThemeProvider prefixes={{ [`${baseClass}`]: `${basePrefixClass}` }}>
      <Table {...locals}>
        <caption>{tableData.caption}</caption>
        <Header columns={tableData.columns} />
        {body}
      </Table>
    </ThemeProvider>
  );
};

export default {
  Component,
};
