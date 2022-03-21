import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCheckProps } from '../Check.types';

import { display } from './Check-display.stories';
import { appearance } from './Check-appearance.stories';
import { size } from './Check-size.stories';
import { theme } from './Check-theme.stories';

export const Check = (args: IconsCheckProps) => (
  <Icon {...args}></Icon>
);

Check.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Check.argTypes = {
  display,
  appearance,
  size,
  theme,
};
