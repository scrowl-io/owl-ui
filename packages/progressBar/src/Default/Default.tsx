import React, { useEffect } from 'react';
import { ThemeProvider, ProgressBar } from 'react-bootstrap';
import { ProgressBarDefaultProps, themePrefixesProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps } from '@owlui/utils';

export const Component = (props: ProgressBarDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'progress';
  const { now } = props;
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
        bsProps: ['bg'],
      },
    },
    ['prefix', 'theme', 'size', 'now']
  );

  themePrefixes[baseClass] = `owlui-${baseClass}
`;
  themePrefixes[`${baseClass}-bar`] = `owlui-${baseClass}-bar`;

  console.log(locals);

  useEffect(() => {
    const progressWrapper: HTMLElement | null =
      document.querySelector('#progress-wrapper');

    if (progressWrapper instanceof Element === false) {
      return;
    }

    progressWrapper?.classList.remove('owlui-bg-primary');
  });

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <ProgressBar {...locals} id="progress-wrapper">
        <ProgressBar {...locals} now={now} label={`${now}%`} />
      </ProgressBar>
    </ThemeProvider>
  );
};

export default {
  Component,
};
