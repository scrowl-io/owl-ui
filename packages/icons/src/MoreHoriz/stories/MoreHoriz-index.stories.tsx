import * as React from 'react';
import { component as Icon } from '../index';
import { IconsMoreHorizProps } from '../MoreHoriz.types';

import { display } from './MoreHoriz-display.stories';
import { appearance } from './MoreHoriz-appearance.stories';
import { size } from './MoreHoriz-size.stories';
import { theme } from './MoreHoriz-theme.stories';

export const MoreHoriz = (args: IconsMoreHorizProps) => (
  <Icon {...args}></Icon>
);

MoreHoriz.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

MoreHoriz.argTypes = {
  display,
  appearance,
  size,
  theme,
};
