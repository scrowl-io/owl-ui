import * as React from 'react';
import { component as Icon } from '../index';
import { IconsChevronLeftProps } from '../ChevronLeft.types';

import { display } from './ChevronLeft-display.stories';
import { appearance } from './ChevronLeft-appearance.stories';
import { size } from './ChevronLeft-size.stories';
import { theme } from './ChevronLeft-theme.stories';

export const ChevronLeft = (args: IconsChevronLeftProps) => (
  <Icon {...args}></Icon>
);

ChevronLeft.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ChevronLeft.argTypes = {
  display,
  appearance,
  size,
  theme,
};
