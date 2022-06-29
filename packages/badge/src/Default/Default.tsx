import * as React from 'react';
import { Badge, ThemeProvider } from 'react-bootstrap';
import { BadgeDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps, themePrefixesProps } from '@owlui/utils';

export const Component = (props: BadgeDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'badge';
  const { variant, children, pill, text } = props;
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
    ['prefix', 'theme', 'size']
  );

  themePrefixes[baseClass] = `owlui-${baseClass}`;

  // below isn't great, but passing 'pill' to the Badge is not generating the class 'rounded-pill' on the <span> like it should be. Ideally we could get that working and then add 'rounded-pill' to the prefix ignore list
  if (pill) {
    locals['className'] += ' owlui-rounded-pill';
  }

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <Badge pill={pill} bg={variant} text={text} {...locals}>
        {children}
      </Badge>
    </ThemeProvider>
  );
};

export default {
  Component,
};
