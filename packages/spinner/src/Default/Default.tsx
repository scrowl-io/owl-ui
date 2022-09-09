import * as React from 'react';
import { ThemeProvider, Spinner } from 'react-bootstrap';
import { SpinnerDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps, themePrefixesProps } from '@owlui/lib/src/utils';

export const Component = (props: SpinnerDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'spinner';
  const { animation } = props;
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
            fields: ['pxScale'],
            value: 'PxScale',
          },
        ],
      },
    },
    ['prefix', 'theme', 'pxScale']
  );

  themePrefixes[baseClass] = `owlui-${baseClass}`;

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <Spinner animation={animation} {...locals} />
    </ThemeProvider>
  );
};

export default {
  Component,
};
