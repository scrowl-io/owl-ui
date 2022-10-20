import * as React from 'react';
import { Button as BsButton, ThemeProvider } from 'react-bootstrap';
import { ButtonDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { getClasses, themePrefixesProps } from '../../../../lib/src/utils';

export const Button = ({
  className,
  pxScale,
  children,
  ...props
}: ButtonDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'btn';
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
      <BsButton className={classes} {...props}>
        {children}
      </BsButton>
    </ThemeProvider>
  );
};

export default {
  Button,
};
