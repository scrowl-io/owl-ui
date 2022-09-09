import * as React from 'react';
import { ProgressBar } from '../index';
import { ProgressBarDefaultProps } from '../Default.types';

import { variant } from './Default-variant.stories';
import { pxScale } from './Default-px-scale.stories';
import { theme } from './Default-theme.stories';
import { progress } from './Default-progress.stories';
import { showLabel } from './Default-label.stories';

export const Default = (args: ProgressBarDefaultProps) => (
  <ProgressBar {...args} />
);

Default.args = {
  variant: variant.defaultValue,
  pxScale: pxScale.defaultValue,
  theme: theme.defaultValue,
  now: progress.defaultValue,
  showLabel: showLabel.defaultValue,
};

Default.argTypes = {
  variant,
  pxScale,
  theme,
};
