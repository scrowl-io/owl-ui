import React from 'react';
import { ThemeProvider, Offcanvas } from 'react-bootstrap';
import { DrawerDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps, themePrefixesProps } from '@owlui/utils';

export const Component = (props: DrawerDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'drawer';
  const { drawer } = props;
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
    ['prefix', 'theme', 'drawer']
  );

  themePrefixes[baseClass] = `owlui-${baseClass}`;
  themePrefixes['offcanvas'] = 'owlui-offcanvas';
  themePrefixes[
    'offcanvas-start'
  ] = `owlui-offcanvas-start owlui-${baseClass}-start`;
  themePrefixes[
    'offcanvas-header'
  ] = `owlui-offcanvas-header owlui-${baseClass}-header`;
  themePrefixes[
    'offcanvas-body'
  ] = `owlui-offcanvas-body owlui-${baseClass}-body`;
  themePrefixes[
    'offcanvas-title'
  ] = `owlui-offcanvas-title owlui-${baseClass}-title`;

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <Offcanvas {...locals}>
        <Offcanvas.Header {...drawer.header.bsProps}>
          <Offcanvas.Title>{drawer.header.content}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{drawer.body}</Offcanvas.Body>
      </Offcanvas>
    </ThemeProvider>
  );
};

export default {
  Component,
};
