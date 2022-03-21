import * as React from 'react';
import { component as Icon } from '../index';
import { IconsChevronRightProps } from '../ChevronRight.types';

import { display } from './ChevronRight-display.stories';
import { appearance } from './ChevronRight-appearance.stories';
import { size } from './ChevronRight-size.stories';
import { theme } from './ChevronRight-theme.stories';

export const ChevronRight = (args: IconsChevronRightProps) => (
  <Icon {...args}></Icon>
);

ChevronRight.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ChevronRight.argTypes = {
  display,
  appearance,
  size,
  theme,
};
