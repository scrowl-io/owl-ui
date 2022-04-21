import * as React from 'react';
import { IconsDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps } from '@owlui/utils';

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
    ['theme', 'appearance']
  );

  return <span {...locals}>{icon}</span>;
};

export default {
  Component,
};
