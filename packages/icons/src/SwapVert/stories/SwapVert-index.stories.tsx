import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSwapVertProps } from '../SwapVert.types';

import { display } from './SwapVert-display.stories';
import { appearance } from './SwapVert-appearance.stories';
import { size } from './SwapVert-size.stories';
import { theme } from './SwapVert-theme.stories';

export const SwapVert = (args: IconsSwapVertProps) => (
  <Icon {...args}></Icon>
);

SwapVert.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SwapVert.argTypes = {
  display,
  appearance,
  size,
  theme,
};
