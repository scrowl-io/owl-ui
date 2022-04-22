import * as React from 'react';
import { ButtonDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps } from '@owlui/utils';

export const Component = (props: ButtonDefaultProps) => {
  const baseClass = 'button';
  const { href, children } = props;
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
            value: 'Theme',
          },
          {
            fields: ['theme', 'appearance'],
            value: 'Theme',
          },
          {
            fields: ['size'],
            value: 'Size',
          },
        ],
      },
    },
    ['prefix', 'theme', 'appearance', 'size']
  );

  const buttonRenderer = () => {
    const Element = href ? 'a' : 'button';

    return <Element {...locals}>{children}</Element>;
  };
  return <>{buttonRenderer()}</>;
};

export default {
  Component,
};
