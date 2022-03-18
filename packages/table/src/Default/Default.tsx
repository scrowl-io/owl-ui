import * as React from 'react';
import { TableDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';

const baseClass = 'owluiTable';

export const Component = (props: TableDefaultProps) => {
  const { children, className, style } = props;

  const modulePrefix = props.prefix;
  const theme = props.theme || 'Default';
  const appearance = props.appearance || 'Primary';

  const styleLocal = {
    base: styleMod[baseClass],
    theme: styleMod[`${baseClass}Theme${theme}`],
    appearance: styleMod[`${baseClass}Theme${theme}${appearance}`],
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
        styleLocal.theme,
        styleLocal.appearance,
      ].join(' ')}
    >
      {children}
    </table>
  );
};

export default {
  Component,
};
