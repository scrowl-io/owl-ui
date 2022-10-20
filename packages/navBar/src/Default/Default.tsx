import * as React from 'react';
import { ThemeProvider, Navbar as BsNavbar, Container } from 'react-bootstrap';
import { NavBarDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { getClasses, themePrefixesProps } from '../../../../lib/src/utils';

export const NavBar = ({
  className,
  theme,
  children,
  ...props
}: NavBarDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'navbar';
  let classes = getClasses({
    module: styleMod,
    base: baseClass,
  });

  themePrefixes[baseClass] = `owlui-${baseClass}`;
  themePrefixes['container'] = `owlui-container`;
  themePrefixes[`${baseClass}-brand`] = `owlui-${baseClass}-brand`;
  themePrefixes[`${baseClass}-toggler`] = `owlui-${baseClass}-toggler`;
  themePrefixes[`${baseClass}-collapse`] = `owlui-${baseClass}-collapse`;

  if (className) {
    classes += ` ${className}`;
  }

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <BsNavbar className={classes} {...props} variant={theme}>
        <Container>{children}</Container>
      </BsNavbar>
    </ThemeProvider>
  );
};

export default {
  NavBar,
};
