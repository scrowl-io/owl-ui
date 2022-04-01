import * as React from 'react';
import { TableDefaultProps } from './Default.types';
import Header from './elements/Header';
import Body from './elements/Body';
import * as styleMod from './styles.module.scss';

const baseClass = 'table';

export const Component = (props: TableDefaultProps) => {
  const { columns, items, className, style } = props;

  const tableColumns = columns || [];
  const tableItems = items || [];

  const modulePrefix = props.prefix;
  const theme = props.theme || 'Default';
  const appearance = props.appearance || 'Primary';
  const outline = props.outline ? 'Outline' : '';

  const styleLocal = {
    base: styleMod[baseClass],
    theme: styleMod[`${baseClass}Theme${theme}`],
    appearance: styleMod[`${baseClass}Theme${theme}${appearance}`],
    outline: styleMod[`${baseClass}${outline}`],
  };

  if (modulePrefix !== undefined && modulePrefix !== null) {
    styleLocal.base = `${modulePrefix}-${styleLocal.base}`;
    styleLocal.theme = `${modulePrefix}-${styleLocal.theme}`;
    styleLocal.appearance = `${modulePrefix}-${styleLocal.appearance}`;
  }

  return (
    <table
      style={style}
      className={[
        className,
        styleLocal.base,
        styleLocal.outline,
        styleLocal.theme,
        styleLocal.appearance,
      ]
        .join(' ')
        .trim()}
    >
      <Header columns={tableColumns} />
      <Body columns={tableColumns} items={tableItems} />
    </table>
  );
};

export default {
  Component,
};
