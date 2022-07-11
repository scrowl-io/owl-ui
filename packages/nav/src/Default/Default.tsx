import React from 'react';
import { ThemeProvider, Nav } from 'react-bootstrap';
import { NavDefaultProps, NavItem } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps, themePrefixesProps } from '@owlui/lib/src/utils';

export const Component = (props: NavDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'nav';
  const { navItems } = props;
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
            value: 'theme',
          },
          {
            fields: ['size'],
            value: 'Size',
          },
        ],
      },
    },
    ['prefix', 'theme', 'size', 'navItems']
  );

  themePrefixes[baseClass] = `owlui-${baseClass}`;
  themePrefixes['nav-link'] = 'owlui-nav-link';

  const renderNavItem = (navItem: NavItem): React.ReactNode => {
    const { navLink, ...navItemRest } = navItem;
    const { label, eventKey, ...navLinkRest } = navLink;

    return (
      <Nav.Item {...navItemRest} key={eventKey}>
        <Nav.Link eventKey={eventKey} {...navLinkRest}>
          {label}
        </Nav.Link>
      </Nav.Item>
    );
  };

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <Nav {...locals}>
        {navItems.map((navItem: NavItem) => renderNavItem(navItem))}
      </Nav>
    </ThemeProvider>
  );
};

export default {
  Component,
};
