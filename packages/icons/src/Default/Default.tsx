import * as React from 'react';
import { IconsDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps } from '@owlui/lib/utils';

export const Component = (props: IconsDefaultProps) => {
  let baseClass = 'icons';
  const icon = props.icon;
  const display = props.display || 'Filled';
  const prefix = props.prefix || '';

  switch (display) {
    case 'Outlined':
      baseClass += 'Outlined';
      break;
  }

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
          {
            fields: ['size'],
            value: 'Size',
          },
        ],
      },
    },
    ['icon', 'prefix', 'display', 'theme', 'appearance', 'size']
  );

  return <span {...locals}>{icon}</span>;
};

export default {
  Component,
};
