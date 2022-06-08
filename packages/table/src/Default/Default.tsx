import * as React from 'react';
import { Table, ThemeProvider } from 'react-bootstrap';
import {
  TableColumnItem,
  TableDefaultProps,
  TableRowItem,
} from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps } from '@owlui/utils';

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
          <th scope="col" id={column.field} key={column.label}>
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );

  const Body = ({ items }: { items: TableRowItem[] }) => (
    <tbody>
      {items.map(item => (
        <tr key={1}>
          {Object.entries(item).map(([key, value]) => (
            <td headers={key} key={key}>
              {value}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );

  return (
    <ThemeProvider prefixes={{ [`${baseClass}`]: `${basePrefixClass}` }}>
      <Table {...locals}>
        <caption>{tableData.caption}</caption>
        <Header columns={tableData.columns} />
        <Body items={tableData.items} />
      </Table>
    </ThemeProvider>
  );
};

export default {
  Component,
};
