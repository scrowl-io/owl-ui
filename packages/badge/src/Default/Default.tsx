import * as React from 'react';
import { Badge, ThemeProvider } from 'react-bootstrap';
import { BadgeDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps, themePrefixesProps } from '@owlui/lib/utils';

export const Component = (props: BadgeDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'badge';
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

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <Badge {...locals}>{children}</Badge>
    </ThemeProvider>
  );
};

export default {
  Component,
};
