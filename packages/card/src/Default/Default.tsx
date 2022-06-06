import * as React from 'react';
import { Card, ThemeProvider } from 'react-bootstrap';
import { CardDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps } from '@owlui/utils';

export const Component = (props: CardDefaultProps) => {
  const baseClass = 'card';
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
        bsProps: ['bg', 'border', 'text'],
      },
    },
    ['prefix', 'theme', 'appearance', 'bg', 'border', 'text']
  );

  return (
    <ThemeProvider prefixes={{ card: 'owlui-card' }}>
      <Card {...locals} style={{ width: '50%' }}>
        {children}
      </Card>
    </ThemeProvider>
  );
};

export default {
  Component,
};
