import * as React from 'react';
import { component as Icon } from '../index';
import { IconsArrowUpwardProps } from '../ArrowUpward.types';

import { display } from './ArrowUpward-display.stories';
import { appearance } from './ArrowUpward-appearance.stories';
import { size } from './ArrowUpward-size.stories';
import { theme } from './ArrowUpward-theme.stories';

export const ArrowUpward = (args: IconsArrowUpwardProps) => (
  <Icon {...args}></Icon>
);

ArrowUpward.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ArrowUpward.argTypes = {
  display,
  appearance,
  size,
  theme,
};
