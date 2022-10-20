import * as React from 'react';
import { ThemeProvider, Spinner as BsSpinner } from 'react-bootstrap';
import { SpinnerDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { getClasses, themePrefixesProps } from '../../../../lib/src/utils';

export const Spinner = ({
  className,
  pxScale,
  animation,
  ...props
}: SpinnerDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'spinner';
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
      <BsSpinner animation={animation} className={classes} {...props} />
    </ThemeProvider>
  );
};

export default {
  Spinner,
};
