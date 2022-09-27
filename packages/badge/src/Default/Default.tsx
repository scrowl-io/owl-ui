import * as React from 'react';
import { Badge as BsBadge, ThemeProvider } from 'react-bootstrap';
import { BadgeDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import {
  createLocalProps,
  themePrefixesProps,
} from '../../../../lib/src/utils';

export const Badge = (props: BadgeDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'badge';
  const { children } = props;
  const prefix = props.prefix || '';

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
        ],
      },
    },
    ['prefix', 'theme']
  );

  themePrefixes[baseClass] = `owlui-${baseClass}`;

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <BsBadge {...locals}>{children}</BsBadge>
    </ThemeProvider>
  );
};

export default {
  Badge,
};
