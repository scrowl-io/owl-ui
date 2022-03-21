import * as React from 'react';
import { TableDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';

const baseClass = 'owluiTable';

export const Component = (props: TableDefaultProps) => {
  const { children, className, style } = props;

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

  // TODO: populate table from props items and headers with prop column names

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
      <caption>Caption</caption>
      {children}
    </table>
  );
};

export default {
  Component,
};
