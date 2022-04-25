import * as React from 'react';
import { NavigationDrawerElementProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps } from '@owlui/utils';
import { Component as NavHeader } from './elements/Header';
import { Component as NavContent } from './elements/Content';

export const Component = (props: NavigationDrawerElementProps) => {
  const baseClass = 'navigationDrawer';
  const { header, items } = props;
  const prefix = props.prefix || '';

  const locals = createLocalProps(
    props,
    {
      module: styleMod,
      classes: {
        base: baseClass,
        prefix: prefix,
        optionals: [
          {
            fields: ['theme'],
            value: 'Theme',
          },
          {
            fields: ['theme', 'appearance'],
            value: 'Theme',
          },
          {
            fields: ['size'],
            value: 'Size',
          },
        ],
      },
    },
    ['prefix', 'appearance', 'theme', 'size', 'header', 'items']
  );

  const Header = header ? <NavHeader>{header}</NavHeader> : '';
  const Content = items ? <NavContent items={items} /> : '';

  return (
    <aside {...locals}>
      {Header}
      {Content}
    </aside>
  );
};

export default {
  Component,
};
