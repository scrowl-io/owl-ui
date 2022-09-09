import * as React from 'react';
import { Button, ThemeProvider } from 'react-bootstrap';
import { ButtonDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps, themePrefixesProps } from '@owlui/lib/src/utils';

export const Component = (props: ButtonDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'btn';
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
            fields: ['pxScale'],
            value: 'PxScale',
          },
        ],
      },
    },
    ['prefix', 'theme', 'pxScale']
  );

  themePrefixes[baseClass] = `owlui-${baseClass}`;

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <Button {...locals}>{props.children}</Button>
    </ThemeProvider>
  );
};

export default {
  Component,
};
