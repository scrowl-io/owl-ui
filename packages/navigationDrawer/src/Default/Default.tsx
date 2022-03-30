import * as React from 'react';
import { NavigationDrawerDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { findModClass } from '@owlui/utils';
import { Component as NavHeader } from './elements/Header';
import { Component as NavContent } from './elements/Content';

const baseClass = 'owluiNavigationDrawer';
const getClassName = findModClass(styleMod, baseClass);

export const Component = (props: NavigationDrawerDefaultProps) => {
  const { className, style, header, items } = props;
  const modulePrefix = props.prefix;
  const theme = props.theme || 'Default';
  const appearance = props.appearance || '';
  const size = props.size || 'Sm';
  const styleLocal = {
    base: styleMod[baseClass],
    theme: getClassName(`Theme${theme}`),
    appearance: getClassName(`Theme${theme}${appearance}`),
    size: getClassName(`Size${size}`),
  };

  if (modulePrefix !== undefined && modulePrefix !== null) {
    styleLocal.base = `${modulePrefix}-${styleLocal.base}`;
    styleLocal.theme = `${modulePrefix}-${styleLocal.theme}`;
    styleLocal.appearance = `${modulePrefix}-${styleLocal.appearance}`;
    styleLocal.size = `${modulePrefix}-${styleLocal.size}`;
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
        styleLocal.size,
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
