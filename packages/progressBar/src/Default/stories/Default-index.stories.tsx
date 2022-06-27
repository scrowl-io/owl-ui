import * as React from 'react';
import { component as ProgressBar } from '../index';
import { ProgressBarDefaultProps } from '../Default.types';

import { bg } from './Default-bg.stories';
import { size } from './Default-size.stories';
import { theme } from './Default-theme.stories';

export const Default = (args: ProgressBarDefaultProps) => (
  // <ProgressBar {...args}>60%</ProgressBar>
  <ProgressBar {...args}></ProgressBar>
);

Default.args = {
  bg: bg.defaultValue,
  size: size.defaultValue,
  theme: theme.defaultValue,
  now: 60,
};

Default.argTypes = {
  bg,
  size,
  theme,
};
