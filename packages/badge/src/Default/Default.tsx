import * as React from 'react';
import { Badge as BsBadge, ThemeProvider } from 'react-bootstrap';
import { BadgeDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { getClasses, themePrefixesProps } from '../../../../lib/src/utils';

export const Badge = ({ className, children, ...props }: BadgeDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'badge';
  let classes = getClasses({
    module: styleMod,
    base: baseClass,
  });

  themePrefixes[baseClass] = `owlui-${baseClass}`;

  if (className) {
    classes += ` ${className}`;
  }

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <BsBadge className={classes} {...props}>
        {children}
      </BsBadge>
    </ThemeProvider>
  );
};

export default {
  Badge,
};
