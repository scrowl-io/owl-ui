import * as React from 'react';
import { Table as BsTable, ThemeProvider } from 'react-bootstrap';
import { TableDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { getClasses, themePrefixesProps } from '../../../../lib/src/utils';
import { Body, Header } from './elements';

export const Table = ({
  className,
  pxScale,
  tableData,
  ...props
}: TableDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'table';
  let classes = getClasses({
    module: styleMod,
    base: baseClass,
    modifiers: [
      {
        base: 'PxScale',
        value: pxScale,
      },
    ],
  });

  themePrefixes[baseClass] = `owlui-${baseClass}`;

  if (className) {
    classes += ` ${className}`;
  }

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <BsTable className={classes} {...props}>
        <caption>{tableData.caption}</caption>
        <Header columns={tableData.columns} />
        <Body items={tableData.items} columns={tableData.columns} />
      </BsTable>
    </ThemeProvider>
  );
};

export default {
  Table,
};
