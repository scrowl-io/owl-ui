import * as React from 'react';
import { ProgressBar } from '../index';
import { ProgressBarDefaultProps } from '../Default.types';

import { variant } from './Default-variant.stories';
import { size } from './Default-size.stories';
import { theme } from './Default-theme.stories';
import { progress } from './Default-progress.stories';
import { showLabel } from './Default-label.stories';

export const Default = (args: ProgressBarDefaultProps) => (
  <ProgressBar {...args} />
);

Default.args = {
  variant: variant.defaultValue,
  size: size.defaultValue,
  theme: theme.defaultValue,
  now: progress.defaultValue,
  showLabel: showLabel.defaultValue,
};

Default.argTypes = {
  variant,
  size,
  theme,
};
