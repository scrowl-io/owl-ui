import * as React from 'react';
import { Button, ThemeProvider } from 'react-bootstrap';
import { ButtonDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps } from '@owlui/utils';

export const Component = (props: ButtonDefaultProps) => {
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
            fields: ['size'],
            value: 'Size',
          },
        ],
      },
    },
    ['prefix', 'theme', 'Size']
  );

  return (
    <ThemeProvider prefixes={{ btn: 'owlui-btn' }}>
      <Button {...locals}>{props.children}</Button>
    </ThemeProvider>
  );
};

export default {
  Component,
};
