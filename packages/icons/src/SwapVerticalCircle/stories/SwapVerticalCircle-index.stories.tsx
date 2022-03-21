import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSwapVerticalCircleProps } from '../SwapVerticalCircle.types';

import { display } from './SwapVerticalCircle-display.stories';
import { appearance } from './SwapVerticalCircle-appearance.stories';
import { size } from './SwapVerticalCircle-size.stories';
import { theme } from './SwapVerticalCircle-theme.stories';

export const SwapVerticalCircle = (args: IconsSwapVerticalCircleProps) => (
  <Icon {...args}></Icon>
);

SwapVerticalCircle.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SwapVerticalCircle.argTypes = {
  display,
  appearance,
  size,
  theme,
};
