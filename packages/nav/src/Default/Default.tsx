import React from 'react';
import { ThemeProvider, Nav as BsNav } from 'react-bootstrap';
import { NavDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { getClasses, themePrefixesProps } from '../../../../lib/src/utils';

export const Nav = ({
  className,
  pxScale,
  children,
  ...props
}: NavDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'nav';
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
  themePrefixes[`${baseClass}-link`] = `owlui-${baseClass}-link`;
  themePrefixes[`${baseClass}-item`] = `owlui-${baseClass}-item`;
  themePrefixes['dropdown'] = `owlui-dropdown`;
  themePrefixes['dropdown-toggle'] = `owlui-dropdown-toggle`;
  themePrefixes['dropdown-menu'] = `owlui-dropdown-menu`;
  themePrefixes['dropdown-item'] = `owlui-dropdown-item`;
  themePrefixes['dropdown-divider'] = `owlui-dropdown-divider`;

  if (className) {
    classes += ` ${className}`;
  }

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <BsNav className={classes} {...props}>
        {children}
      </BsNav>
    </ThemeProvider>
  );
};

export default {
  Nav,
};
