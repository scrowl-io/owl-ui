import * as React from 'react';
import { ThemeProvider, Nav } from 'react-bootstrap';
import { NavDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps, themePrefixesProps } from '@owlui/utils';

export const Component = (props: NavDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'nav';
  const { disabled, alignment } = props;
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
    ['prefix', 'theme', 'size', 'alignment']
  );

  themePrefixes[baseClass] = `owlui-${baseClass}`;
  themePrefixes['nav-link'] = 'owlui-nav-link';
  // themePrefixes['flex-column'] = 'owlui-flex-column';
  // themePrefixes['flex-end'] = 'owlui-flex-end';
  // themePrefixes['flex-column'] = 'owlui-flex-column';

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <Nav
        {...locals}
        className={`${alignment}`}
        activeKey="/home"
        onSelect={selectedKey => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="disabled"
            // className={disabled ? `owlui-disabled` : ''}
            disabled={disabled}
          >
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </ThemeProvider>
  );
};;

export default {
  Component,
};
