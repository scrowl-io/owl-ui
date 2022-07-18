/* eslint-disable react/prop-types */
import * as React from 'react';
import { NavigationDrawerElementProps } from './Default.types';
import { ThemeProvider, Offcanvas } from 'react-bootstrap';
import * as styleMod from './styles.module.scss';
import { createLocalProps, themePrefixesProps } from '@owlui/lib/src/utils';
import { Component as NavHeader } from './elements/Header';
import { Component as NavContent } from './elements/Content';

export const Component = (props: NavigationDrawerElementProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'navigation-drawer';
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
            value: 'theme',
          },
        ],
      },
    },
    ['prefix', 'theme', 'header', 'items']
  );

  const Header = () => {
    if (header) {
      const { content, ...rest } = header;

      return (
        <Offcanvas.Header {...rest}>
          <NavHeader>{content}</NavHeader>
        </Offcanvas.Header>
      );
    }
  };

  const Content = items ? <NavContent items={items} /> : null;

  themePrefixes['offcanvas'] = `owlui-${baseClass} owlui-offcanvas`;
  themePrefixes['offcanvas-backdrop'] = `owlui-offcanvas-backdrop`;
  themePrefixes['offcanvas-header'] = `owlui-offcanvas-header`;
  themePrefixes['offcanvas-body'] = `owlui-offcanvas-body`;

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <Offcanvas {...locals}>
        <>
          {Header()}
          <Offcanvas.Body>{Content}</Offcanvas.Body>
        </>
      </Offcanvas>
    </ThemeProvider>
  );
};

export default {
  Component,
};
