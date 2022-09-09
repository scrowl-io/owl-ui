import * as React from 'react';
import { Card, ThemeProvider } from 'react-bootstrap';
import { CardDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps } from '@owlui/lib/src/utils';

export const Component = (props: CardDefaultProps) => {
  const baseClass = 'card';
  const basePrefixClass = `owlui-${baseClass}`;
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
            fields: ['pxScale'],
            value: 'PxScale',
          },
        ],
        bsProps: ['bg', 'border', 'text'],
      },
    },
    ['prefix', 'theme', 'appearance', 'bg', 'border', 'text']
  );

  const bsPrefixes = {
    [`${baseClass}`]: `${basePrefixClass}-card`,
    [`${baseClass}-body`]: `${basePrefixClass}-body`,
    [`${baseClass}-footer`]: `${basePrefixClass}-footer`,
    [`${baseClass}-header`]: `${basePrefixClass}-header`,
    [`${baseClass}-img`]: `${basePrefixClass}-img`,
    [`${baseClass}-img-overlay`]: `${basePrefixClass}-img-overlay`,
    [`${baseClass}-subtitle`]: `${basePrefixClass}-sub-title`,
    [`${baseClass}-text`]: `${basePrefixClass}-text`,
    [`${baseClass}-title`]: `${basePrefixClass}-title`,
  };

  return (
    <ThemeProvider prefixes={bsPrefixes}>
      <Card {...locals}>{children}</Card>
    </ThemeProvider>
  );
};

export default {
  Component,
};
