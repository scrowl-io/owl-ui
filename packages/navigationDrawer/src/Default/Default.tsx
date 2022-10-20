/* eslint-disable react/prop-types */
import * as React from 'react';
import { NavigationDrawerElementProps } from './Default.types';
import { ThemeProvider, Offcanvas } from 'react-bootstrap';
import * as styleMod from './styles.module.scss';
import { getClasses, themePrefixesProps } from '../../../../lib/src/utils';
import { NavigationDrawerHeader as NavHeader } from './elements/Header';
import { NavigationDrawerContent as NavContent } from './elements/Content';

export const NavigationDrawer = ({
  className,
  header,
  items,
  ...props
}: NavigationDrawerElementProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'navigationDrawer';
  let classes = getClasses({
    module: styleMod,
    base: baseClass,
  });

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

  if (className) {
    classes += ` ${className}`;
  }

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <Offcanvas className={classes} {...props}>
        <>
          {Header()}
          <Offcanvas.Body>{Content}</Offcanvas.Body>
        </>
      </Offcanvas>
    </ThemeProvider>
  );
};

export default {
  NavigationDrawer,
};
