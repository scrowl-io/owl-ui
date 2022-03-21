import * as React from 'react';
import { component as Icon } from '../index';
import { IconsArrowDownwardProps } from '../ArrowDownward.types';

import { display } from './ArrowDownward-display.stories';
import { appearance } from './ArrowDownward-appearance.stories';
import { size } from './ArrowDownward-size.stories';
import { theme } from './ArrowDownward-theme.stories';

export const ArrowDownward = (args: IconsArrowDownwardProps) => (
  <Icon {...args}></Icon>
);

ArrowDownward.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ArrowDownward.argTypes = {
  display,
  appearance,
  size,
  theme,
};
