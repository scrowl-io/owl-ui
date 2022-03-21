import * as React from 'react';
import { component as Icon } from '../index';
import { IconsBorderVerticalProps } from '../BorderVertical.types';

import { display } from './BorderVertical-display.stories';
import { appearance } from './BorderVertical-appearance.stories';
import { size } from './BorderVertical-size.stories';
import { theme } from './BorderVertical-theme.stories';

export const BorderVertical = (args: IconsBorderVerticalProps) => (
  <Icon {...args}></Icon>
);

BorderVertical.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

BorderVertical.argTypes = {
  display,
  appearance,
  size,
  theme,
};
