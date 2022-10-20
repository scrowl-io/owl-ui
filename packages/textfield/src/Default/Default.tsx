import * as React from 'react';
import { TextfieldDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { getClasses } from '../../../../lib/src/utils';

export const Textfield = ({
  className,
  pxScale,
  appearance,
  ...props
}: TextfieldDefaultProps) => {
  const baseClass = 'textfield';
  let classes = getClasses({
    module: styleMod,
    base: baseClass,
    modifiers: [
      {
        base: 'PxScale',
        value: pxScale,
      },
      {
        base: 'Appearance',
        value: appearance,
      },
    ],
  });

  if (className) {
    classes += ` ${className}`;
  }

  return <input className={classes} {...props} />;
};

export default {
  Textfield,
};
