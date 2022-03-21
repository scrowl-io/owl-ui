import * as React from 'react';
import { component as Icon } from '../index';
import { IconsTabUnselectedProps } from '../TabUnselected.types';

import { display } from './TabUnselected-display.stories';
import { appearance } from './TabUnselected-appearance.stories';
import { size } from './TabUnselected-size.stories';
import { theme } from './TabUnselected-theme.stories';

export const TabUnselected = (args: IconsTabUnselectedProps) => (
  <Icon {...args}></Icon>
);

TabUnselected.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

TabUnselected.argTypes = {
  display,
  appearance,
  size,
  theme,
};
