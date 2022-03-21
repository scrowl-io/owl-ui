import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSwapCallsProps } from '../SwapCalls.types';

import { display } from './SwapCalls-display.stories';
import { appearance } from './SwapCalls-appearance.stories';
import { size } from './SwapCalls-size.stories';
import { theme } from './SwapCalls-theme.stories';

export const SwapCalls = (args: IconsSwapCallsProps) => (
  <Icon {...args}></Icon>
);

SwapCalls.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SwapCalls.argTypes = {
  display,
  appearance,
  size,
  theme,
};
