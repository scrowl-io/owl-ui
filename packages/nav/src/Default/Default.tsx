import React from 'react';
import { ThemeProvider, Nav } from 'react-bootstrap';
import { NavDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps, themePrefixesProps } from '@owlui/lib/src/utils';

export const Component = (props: NavDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'nav';
  const { alignment, navLinks } = props;
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
          {
            fields: ['alignment'],
            value: 'alignment',
          },
        ],
      },
    },
    ['prefix', 'theme', 'size', 'alignment', 'navLinks']
  );

  themePrefixes[baseClass] = `owlui-${baseClass}`;
  themePrefixes['nav-link'] = 'owlui-nav-link';

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <Nav
        {...locals}
        className={`${alignment}`}
        activeKey="link-5"
        onSelect={selectedKey => alert(`selected ${selectedKey}`)}
      >
        {navLinks?.map(navLink => {
          return (
            <Nav.Item key={navLink.eventKey}>
              <Nav.Link
                disabled={navLink.disabled}
                eventKey={navLink.eventKey}
                href={navLink.href}
              >
                {navLink.label}
              </Nav.Link>
            </Nav.Item>
          );
        })}
      </Nav>
    </ThemeProvider>
  );
};

export default {
  Component,
};
