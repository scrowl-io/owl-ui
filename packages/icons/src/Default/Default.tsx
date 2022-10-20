import * as React from 'react';
import { IconsDefaultProps } from './Default.types';
import * as css from './styles.module.scss';
import { getClasses } from '../../../../lib/src/utils';

export const Icon = ({
  className,
  style,
  icon,
  appearance,
  display,
  filled,
  wght,
  opsz,
  grad,
  pxScale,
  ...props
}: IconsDefaultProps) => {
  const baseClass = 'icons';
  const fill = `'FILL' ${filled ? 1 : 0}`;
  const styleWght = `'wght' ${wght ? wght : 400}`;
  const styleGrad = `'GRAD' ${grad ? grad : 0}`;
  const styleOpsz = `'opsz' ${opsz && opsz >= 20 && opsz <= 48 ? opsz : 48}`;
  const localStyles = Object.assign(
    {
      fontVariationSettings: `${fill}, ${styleWght}, ${styleGrad}, ${styleOpsz}`,
    },
    style
  );
  let classes = getClasses({
    module: css,
    base: baseClass,
    modifiers: [
      {
        base: 'Appearance',
        value: appearance,
      },
      {
        base: 'PxScale',
        value: pxScale,
      },
    ],
  });

  switch (display) {
    case 'rounded':
      classes += ` ${css.owluiIconsRounded}`;
      break;
    case 'sharp':
      classes += ` ${css.owluiIconsSharp}`;
      break;
    case 'outlined':
    default:
      classes += ` ${css.owluiIconsOutlined}`;
      break;
  }

  if (className) {
    classes += ` ${className}`;
  }

  return (
    <span className={classes} {...props} style={localStyles}>
      {icon}
    </span>
  );
};

export default {
  Icon,
};
