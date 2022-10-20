import * as React from 'react';
import { Card as BsCard, ThemeProvider } from 'react-bootstrap';
import { CardDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { getClasses } from '../../../../lib/src/utils';

export const Card = ({
  className,
  pxScale,
  children,
  ...props
}: CardDefaultProps) => {
  const baseClass = 'card';
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
  const basePrefixClass = `owlui-${baseClass}`;

  const bsPrefixes = {
    [`${baseClass}`]: `${basePrefixClass}`,
    [`${baseClass}-body`]: `${basePrefixClass}-body`,
    [`${baseClass}-footer`]: `${basePrefixClass}-footer`,
    [`${baseClass}-header`]: `${basePrefixClass}-header`,
    [`${baseClass}-img`]: `${basePrefixClass}-img`,
    [`${baseClass}-img-overlay`]: `${basePrefixClass}-img-overlay`,
    [`${baseClass}-subtitle`]: `${basePrefixClass}-sub-title`,
    [`${baseClass}-text`]: `${basePrefixClass}-text`,
    [`${baseClass}-title`]: `${basePrefixClass}-title`,
  };

  if (className) {
    classes += ` ${className}`;
  }

  return (
    <ThemeProvider prefixes={bsPrefixes}>
      <BsCard className={classes} {...props}>
        {children}
      </BsCard>
    </ThemeProvider>
  );
};

export default {
  Card,
};
