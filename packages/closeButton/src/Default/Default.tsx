import React from 'react';
import { CloseButton as BsCloseButton, ThemeProvider } from 'react-bootstrap';
import { CloseButtonDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { getClasses, themePrefixesProps } from '../../../../lib/src/utils';

export const CloseButton = ({
  className,
  pxScale,
  ...props
}: CloseButtonDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'btn-close';
  let classes = getClasses({
    module: styleMod,
    base: baseClass,
    modifiers: [
      {
        base: 'PxScale',
        value: pxScale,
      },
    ],
  });

  themePrefixes[baseClass] = `owlui-${baseClass}`;

  if (className) {
    classes += ` ${className}`;
  }

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <BsCloseButton className={classes} {...props} />
    </ThemeProvider>
  );
};

export default {
  CloseButton,
};
