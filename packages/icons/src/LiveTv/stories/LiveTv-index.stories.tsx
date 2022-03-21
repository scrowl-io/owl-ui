import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLiveTvProps } from '../LiveTv.types';

import { display } from './LiveTv-display.stories';
import { appearance } from './LiveTv-appearance.stories';
import { size } from './LiveTv-size.stories';
import { theme } from './LiveTv-theme.stories';

export const LiveTv = (args: IconsLiveTvProps) => (
  <Icon {...args}></Icon>
);

LiveTv.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

LiveTv.argTypes = {
  display,
  appearance,
  size,
  theme,
};
