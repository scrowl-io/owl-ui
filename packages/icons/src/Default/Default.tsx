import * as React from 'react';
import { IconsDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps } from '../../../../lib/src/utils';

export const Component = ({ style, ...props }: IconsDefaultProps) => {
  let baseClass = 'icons';
  const localStyles = style ? JSON.parse(JSON.stringify(style)) : {};
  const icon = props.icon;
  const prefix = props.prefix || '';

  switch (props.display) {
    case 'rounded':
      baseClass += 'Rounded';
      break;
    case 'sharp':
      baseClass += 'Sharp';
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
            fields: ['pxScale'],
            value: 'PxScale',
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
      'pxScale',
      'filled',
      'wght',
      'grad',
      'opsz',
    ]
  ) as IconsDefaultProps;

  const fill = `'FILL' ${props.filled ? 1 : 0}`;
  const wght = `'wght' ${props.wght ? props.wght : 400}`;
  const grad = `'GRAD' ${props.grad ? props.grad : 0}`;
  const opsz = `'opsz' ${
    props.opsz && props.opsz >= 20 && props.opsz <= 48 ? props.opsz : 48
  }`;
  localStyles.fontVariationSettings = `${fill}, ${wght}, ${grad}, ${opsz}`;

  return (
    <span {...locals} style={localStyles}>
      {icon}
    </span>
  );
};

export default {
  Component,
};
