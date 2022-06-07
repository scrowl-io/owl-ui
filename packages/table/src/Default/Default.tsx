import * as React from 'react';
import { Table, ThemeProvider } from 'react-bootstrap';
import { TableDefaultProps } from './Default.types';
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
        ],
      },
    },
    ['prefix', 'theme', 'tableData']
  );

  return (
    <ThemeProvider prefixes={{ [`${baseClass}`]: `${basePrefixClass}` }}>
      <Table {...locals}>
        <thead>
          <tr>
            {tableData.columns.map(column => (
              <th key={column.label}>{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.items.map(item => (
            <tr key={1}>
              {Object.entries(item).map(([key, value]) => (
                <td key={key} colSpan={item.colSpan as number}>
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </ThemeProvider>
  );
};

export default {
  Component,
};
