import * as React from 'react';
import { IconsDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';

const baseClass = 'owluiIcons';

export const Component = (props: IconsDefaultProps) => {
  const { className, style } = props;

  const modulePrefix = props.prefix;
  const icon = props.icon;
  const display = props.display || 'Filled';
  const theme = props.theme || '';
  const appearance = props.appearance || '';
  const size = props.size || '';

  const styleLocal = {
    base: styleMod[baseClass],
    theme: styleMod[`${baseClass}Theme${theme}`],
    appearance: styleMod[`${baseClass}Theme${theme}${appearance}`],
    size: '',
  };

  if (size) {
    styleLocal.size = styleMod[`${baseClass}Size${size}`];
  }

  if (modulePrefix !== undefined && modulePrefix !== null) {
    styleLocal.base = `${modulePrefix}-${styleLocal.base}`;
    styleLocal.theme = `${modulePrefix}-${styleLocal.theme}`;
    styleLocal.appearance = `${modulePrefix}-${styleLocal.appearance}`;

    if (size) {
      styleLocal.size = `${modulePrefix}-${styleLocal.size}`;
    }
  }

  switch (display) {
    case 'Outlined':
      styleLocal.base += '-outlined';
      break;
  }

  return (
    <span
      style={style}
      className={[
        className?.trim(),
        styleLocal.base,
        styleLocal.theme,
        styleLocal.appearance,
        styleLocal.size,
      ].join(' ')}
    >
      {icon}
    </span>
  );
};

export default {
  Component,
};
