import * as React from 'react';
import { NavigationDrawerElementProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { findModClass } from '@owlui/utils';
import { Component as NavHeader } from './elements/Header';
import { Component as NavContent } from './elements/Content';

const baseClass = 'navigationDrawer';
const getClassName = findModClass(styleMod, baseClass);

export const Component = (props: NavigationDrawerElementProps) => {
  const { className, style, header, items } = props;
  const modulePrefix = props.prefix;
  const theme = props.theme || 'Default';
  const appearance = props.appearance || '';
  const styleLocal = {
    base: styleMod[baseClass],
    theme: getClassName(`Theme${theme}`),
    appearance: getClassName(`Theme${theme}${appearance}`),
  };

  if (modulePrefix !== undefined && modulePrefix !== null) {
    styleLocal.base = `${modulePrefix}-${styleLocal.base}`;
    styleLocal.theme = `${modulePrefix}-${styleLocal.theme}`;
    styleLocal.appearance = `${modulePrefix}-${styleLocal.appearance}`;
  }

  const Header = header ? <NavHeader>{header}</NavHeader> : '';
  const Content = items ? <NavContent items={items} /> : '';

  return (
    <aside
      style={style}
      className={[
        className,
        styleLocal.base,
        styleLocal.theme,
        styleLocal.appearance,
      ].join(' ')}
    >
      {Header}
      {Content}
    </aside>
  );
};

export default {
  Component,
};
