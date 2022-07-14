import * as React from 'react';
import { ThemeProvider, Navbar, Container } from 'react-bootstrap';
import { NavBarDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps, themePrefixesProps } from '@owlui/lib/src/utils';

export const Component = (props: NavBarDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'navbar';
  const { theme, children } = props;
  const prefix = props.prefix || '';

  const locals = createLocalProps(
    props,
    {
      module: styleMod,
      classes: {
        base: baseClass,
        prefix: prefix,
        optionals: [],
      },
    },
    ['prefix']
  );

  themePrefixes[baseClass] = `owlui-${baseClass}`;
  themePrefixes['container'] = `owlui-${baseClass}-container`;
  themePrefixes[`${baseClass}-brand`] = `owlui-${baseClass}-brand`;
  themePrefixes[`${baseClass}-toggler`] = `owlui-${baseClass}-toggler`;

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <Navbar {...locals} variant={theme}>
        <Container>{children}</Container>
      </Navbar>
    </ThemeProvider>
  );
};

export default {
  Component,
};
