import React from 'react';
import { ThemeProvider, ProgressBar } from 'react-bootstrap';
import { ProgressBarDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps, themePrefixesProps } from '@owlui/lib/utils';

export const Component = (props: ProgressBarDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'progress';
  const { now, variant, showLabel } = props;
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
  themePrefixes[`${baseClass}-bar`] = `owlui-${baseClass}-bar`;

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <ProgressBar
        {...locals}
        variant={variant}
        label={showLabel ? `${now}%` : ''}
        style={showLabel ? { height: 'auto' } : undefined}
      />
    </ThemeProvider>
  );
};

export default {
  Component,
};
