import * as React from 'react';
import { ThemeProvider, Navbar as BsNavbar, Container } from 'react-bootstrap';
import { NavBarDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import {
  createLocalProps,
  themePrefixesProps,
} from '../../../../lib/src/utils';

export const NavBar = (props: NavBarDefaultProps) => {
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
  themePrefixes['container'] = `owlui-container`;
  themePrefixes[`${baseClass}-brand`] = `owlui-${baseClass}-brand`;
  themePrefixes[`${baseClass}-toggler`] = `owlui-${baseClass}-toggler`;
  themePrefixes[`${baseClass}-collapse`] = `owlui-${baseClass}-collapse`;

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <BsNavbar {...locals} variant={theme}>
        <Container>{children}</Container>
      </BsNavbar>
    </ThemeProvider>
  );
};

export default {
  NavBar,
};
