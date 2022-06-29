import * as React from 'react';
import { Badge, ThemeProvider } from 'react-bootstrap';
import { BadgeDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps, themePrefixesProps } from '@owlui/utils';

export const Component = (props: BadgeDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'badge';
  const { variant, children, pill } = props;
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

  if (pill) {
    locals['className'] += ' owlui-rounded-pill';
  }

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <Badge bg={variant} {...locals}>
        {children}
      </Badge>
    </ThemeProvider>
  );
};

export default {
  Component,
};
