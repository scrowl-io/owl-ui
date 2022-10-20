import * as React from 'react';
import { IconsDefaultProps } from './Default.types';
import * as css from './styles.module.scss';

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
  let classes = '';
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

  if (className) {
    classes += ` ${className}`;
  }

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

  switch (appearance) {
    case 'Default':
      classes += ` ${css.owluiIconsAppearanceDefault}`;
      break;
    case 'Lesson':
      classes += ` ${css.owluiIconsAppearanceLesson}`;
      break;
    case 'Module':
      classes += ` ${css.owluiIconsAppearanceModule}`;
      break;
    case 'Primary':
      classes += ` ${css.owluiIconsAppearancePrimary}`;
      break;
    case 'Quiz':
      classes += ` ${css.owluiIconsAppearanceQuiz}`;
      break;
    case 'Slide':
      classes += ` ${css.owluiIconsAppearanceSlide}`;
      break;
    case 'Template':
      classes += ` ${css.owluiIconsAppearanceTemplate}`;
      break;
  }

  if (pxScale) {
    const scaleClass = `owluiIconsPxScale${pxScale}`;

    classes += '' + css[scaleClass];
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
