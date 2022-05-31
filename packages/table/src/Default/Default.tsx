import * as React from 'react';
import { TableDefaultProps } from './Default.types';
import Header from './elements/Header';
import Body from './elements/Body';
import * as styleMod from './styles.module.scss';
import { createLocalProps } from '@owlui/utils';

export const Component = (props: TableDefaultProps) => {
  const baseClass = 'table';
  const { columns, items } = props;
  const tableColumns = columns || [];
  const tableItems = items || [];
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
            fields: ['appearance'],
            value: 'Appearance',
          },
          {
            fields: ['outline'],
            value: 'Outline',
          },
        ],
      },
    },
    ['prefix', 'theme', 'appearance', 'size', 'columns', 'items', 'outline']
  );

  return (
    <table {...locals}>
      <Header columns={tableColumns} />
      <Body columns={tableColumns} items={tableItems} />
    </table>
  );
};

export default {
  Component,
};
