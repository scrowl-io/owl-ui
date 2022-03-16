import * as React from 'react';
import { ButtonDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';

const baseClass = 'owluiButton';

export const Component = (props: ButtonDefaultProps) => {
  const { children, className, onClick, style, arialabel, ariadescribedby } =
    props;

  const modulePrefix = props.prefix;
  const theme = props.theme || 'Default';
  const appearance = props.appearance || 'Default';
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
    <button
      style={style}
      className={[
        className,
        styleLocal.base,
        styleLocal.theme,
        styleLocal.appearance,
        styleLocal.size,
      ].join(' ')}
      onClick={onClick}
      aria-label={arialabel}
      aria-describedby={ariadescribedby}
    >
      {children}
    </button>
  );
};

export default {
  Component,
};
