import React from 'react';
import { ThemeProvider, Nav as BsNav } from 'react-bootstrap';
import { NavDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import {
  createLocalProps,
  themePrefixesProps,
} from '../../../../lib/src/utils';

export const Nav = (props: NavDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'nav';
  const { children } = props;
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
    ['prefix', 'theme']
  );

  themePrefixes[baseClass] = `owlui-${baseClass}`;
  themePrefixes[`${baseClass}-link`] = `owlui-${baseClass}-link`;
  themePrefixes[`${baseClass}-item`] = `owlui-${baseClass}-item`;
  themePrefixes['dropdown'] = `owlui-dropdown`;
  themePrefixes['dropdown-toggle'] = `owlui-dropdown-toggle`;
  themePrefixes['dropdown-menu'] = `owlui-dropdown-menu`;
  themePrefixes['dropdown-item'] = `owlui-dropdown-item`;
  themePrefixes['dropdown-divider'] = `owlui-dropdown-divider`;

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <BsNav {...locals}>{children}</BsNav>
    </ThemeProvider>
  );
};

export default {
  Nav,
};
