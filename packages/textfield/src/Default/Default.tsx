import * as React from 'react';
import { TextfieldDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';

const baseClass = 'textfield';

export const Component = (props: TextfieldDefaultProps) => {
  const { className, style } = props;

  const modulePrefix = props.prefix;
  const theme = props.theme || 'Default';
  const appearance = props.appearance || 'Primary';
  const size = props.size || 'Md';

  const styleLocal = {
    base: styleMod[baseClass],
    theme: styleMod[`${baseClass}Theme${theme}`],
    appearance: styleMod[`${baseClass}Theme${theme}${appearance}`],
    size: styleMod[`${baseClass}Size${size}`],
  };

  if (modulePrefix !== undefined && modulePrefix !== null) {
    styleLocal.base = `${modulePrefix}-${styleLocal.base}`;
    styleLocal.theme = `${modulePrefix}-${styleLocal.theme}`;
    styleLocal.appearance = `${modulePrefix}-${styleLocal.appearance}`;
    styleLocal.size = `${modulePrefix}-${styleLocal.size}`;
  }

  return (
    <input
      type="text"
      style={style}
      className={[
        className,
        styleLocal.base,
        styleLocal.theme,
        styleLocal.appearance,
        styleLocal.size,
      ].join(' ')}
    />
  );
};

export default {
  Component,
};
