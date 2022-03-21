import * as React from 'react';
import { IconsDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';

const baseClass = 'owluiIcons';

export const Component = (props: IconsDefaultProps) => {
  const { children, className, style } = props;

  const modulePrefix = props.prefix;
  const display = props.display || 'Filled';
  const theme = props.theme || '';
  const appearance = props.appearance || '';
  const size = props.size || 'Md';
  let iconClass = '';

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

  switch (display) {
    case 'Filled':
      iconClass = 'material-icons';
      break;
    case 'Outlined':
      iconClass = 'material-icons-outlined';
      break;
  }

  return (
    <span
      style={style}
      className={[
        iconClass,
        className?.trim(),
        styleLocal.base,
        styleLocal.theme,
        styleLocal.appearance,
        styleLocal.size,
      ].join(' ')}
    >
      {children}
    </span>
  );
};

export default {
  Component,
};
