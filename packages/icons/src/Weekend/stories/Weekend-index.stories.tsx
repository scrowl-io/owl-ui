import * as React from 'react';
import { component as Icon } from '../index';
import { IconsWeekendProps } from '../Weekend.types';

import { display } from './Weekend-display.stories';
import { appearance } from './Weekend-appearance.stories';
import { size } from './Weekend-size.stories';
import { theme } from './Weekend-theme.stories';

export const Weekend = (args: IconsWeekendProps) => (
  <Icon {...args}></Icon>
);

Weekend.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Weekend.argTypes = {
  display,
  appearance,
  size,
  theme,
};
