import * as React from 'react';
import { CardDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';

const baseClass = 'owluiCard';

export const Component = (props: CardDefaultProps) => {
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
    <div
      style={style}
      className={[
        className,
        styleLocal.base,
        styleLocal.theme,
        styleLocal.appearance,
      ]
        .join(' ')
        .trim()}
    >
      {children}
    </div>
  );
};

export default {
  Component,
};
