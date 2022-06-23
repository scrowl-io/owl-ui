import * as React from 'react';
import { ThemeProvider, Spinner } from 'react-bootstrap';
import { SpinnerDefaultProps, themePrefixesProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps } from '@owlui/utils';

export const Component = (props: SpinnerDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'spinner';
  const { animation, variant } = props;
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
          {
            fields: ['size'],
            value: 'Size',
          },
        ],
      },
    },
    ['prefix', 'theme', 'size']
  );

  themePrefixes[baseClass] = `owlui-${baseClass}`;

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <Spinner animation={animation} variant={variant} {...locals} />
    </ThemeProvider>
  );
};

export default {
  Component,
};
