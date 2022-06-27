import * as React from 'react';
import { ThemeProvider } from 'react-bootstrap';
import { CloseButtonDefaultProps, themePrefixesProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps } from '@owlui/utils';

export const Component = (props: CloseButtonDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'closeButton';
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
          {
            fields: ['size'],
            value: 'Size',
          },
        ],
      },
    },
    ['prefix', 'theme', 'size']
  );

  themePrefixes[baseClass] = `owlui-${baseClass}`;

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <div {...locals}>{children}</div>
    </ThemeProvider>
  );
};

export default {
  Component,
};
