import * as React from 'react';
import { Table, ThemeProvider } from 'react-bootstrap';
import { TableDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps } from '@owlui/lib/src/utils';
import { Body, Header } from './elements';

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

  return (
    <ThemeProvider prefixes={{ [`${baseClass}`]: `${basePrefixClass}` }}>
      <Table {...locals}>
        <caption>{tableData.caption}</caption>
        <Header columns={tableData.columns} />
        <Body items={tableData.items} columns={tableData.columns} />
      </Table>
    </ThemeProvider>
  );
};

export default {
  Component,
};
