import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSortByAlphaProps } from '../SortByAlpha.types';

import { display } from './SortByAlpha-display.stories';
import { appearance } from './SortByAlpha-appearance.stories';
import { size } from './SortByAlpha-size.stories';
import { theme } from './SortByAlpha-theme.stories';

export const SortByAlpha = (args: IconsSortByAlphaProps) => (
  <Icon {...args}></Icon>
);

SortByAlpha.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SortByAlpha.argTypes = {
  display,
  appearance,
  size,
  theme,
};
