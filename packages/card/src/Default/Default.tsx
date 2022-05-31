import * as React from 'react';
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
          {
            fields: ['appearance'],
            value: 'Appearance',
          },
        ],
      },
    },
    ['prefix', 'theme', 'appearance']
  );

  return <div {...locals}>{children}</div>;
};

export default {
  Component,
};
