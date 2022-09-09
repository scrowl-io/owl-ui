import * as React from 'react';
import { IconsDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps } from '@owlui/lib/src/utils';

export const Component = (props: IconsDefaultProps) => {
  let baseClass = 'icons';
  const display = props.display;
  const icon = props.icon;
  const prefix = props.prefix || '';

  switch (display) {
    case 'rounded':
      baseClass += 'Rounded';
      break;
    case 'sharp':
      baseClass += 'Sharp';
      break;
    case 'regular':
      break;
    case 'outlined':
    default:
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
    [
      'icon',
      'prefix',
      'display',
      'theme',
      'appearance',
      'size',
      'filled',
      'wght',
      'grad',
      'opsz',
    ]
  ) as IconsDefaultProps;

  if (display !== 'regular') {
    const fill = `'FILL' ${props.filled ? 1 : 0}`;
    const wght = `'wght' ${props.wght ? props.wght : 400}`;
    const grad = `'GRAD' ${props.grad ? props.grad : 0}`;
    const opsz = `'opsz' ${
      props.opsz && props.opsz >= 20 && props.opsz <= 48 ? props.opsz : 48
    }`;
    const displayStyle = {
      fontVariationSettings: `${fill}, ${wght}, ${grad}, ${opsz}`.toString(),
    };

    locals.style = Object.assign(props.style ? props.style : {}, displayStyle);
  }

  return <span {...locals}>{icon}</span>;
};

export default {
  Component,
};
