import React from 'react';
import { ThemeProvider, ProgressBar as BsProgressBar } from 'react-bootstrap';
import { ProgressBarDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { getClasses, themePrefixesProps } from '../../../../lib/src/utils';

export const ProgressBar = ({
  className,
  pxScale,
  now,
  showLabel,
  ...props
}: ProgressBarDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'progress';
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
  themePrefixes[`${baseClass}-bar`] = `owlui-${baseClass}-bar`;

  if (className) {
    classes += ` ${className}`;
  }

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <BsProgressBar
        className={classes}
        {...props}
        now={now}
        label={showLabel ? `${now}%` : ''}
        style={showLabel ? { height: 'auto' } : undefined}
      />
    </ThemeProvider>
  );
};

export default {
  ProgressBar,
};
