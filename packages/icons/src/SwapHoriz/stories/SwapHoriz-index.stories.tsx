import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSwapHorizProps } from '../SwapHoriz.types';

import { display } from './SwapHoriz-display.stories';
import { appearance } from './SwapHoriz-appearance.stories';
import { size } from './SwapHoriz-size.stories';
import { theme } from './SwapHoriz-theme.stories';

export const SwapHoriz = (args: IconsSwapHorizProps) => (
  <Icon {...args}></Icon>
);

SwapHoriz.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SwapHoriz.argTypes = {
  display,
  appearance,
  size,
  theme,
};
