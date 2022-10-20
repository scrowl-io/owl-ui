import React from 'react';
import { ThemeProvider, Offcanvas } from 'react-bootstrap';
import { DrawerDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { getClasses, themePrefixesProps } from '../../../../lib/src/utils';

export const Drawer = ({
  className,
  pxScale,
  drawer,
  ...props
}: DrawerDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'drawer';
  let classes = getClasses({
    module: styleMod,
    base: baseClass,
    modifiers: [
      {
        base: 'PxScale',
        value: pxScale,
      },
    ],
  });

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

  if (className) {
    classes += ` ${className}`;
  }

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <Offcanvas className={classes} {...props}>
        <Offcanvas.Header {...drawer.header.bsProps}>
          <Offcanvas.Title>{drawer.header.content}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{drawer.body}</Offcanvas.Body>
      </Offcanvas>
    </ThemeProvider>
  );
};

export default {
  Drawer,
};
