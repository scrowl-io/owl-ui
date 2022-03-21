import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPowerProps } from '../Power.types';

import { display } from './Power-display.stories';
import { appearance } from './Power-appearance.stories';
import { size } from './Power-size.stories';
import { theme } from './Power-theme.stories';

export const Power = (args: IconsPowerProps) => (
  <Icon {...args}></Icon>
);

Power.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Power.argTypes = {
  display,
  appearance,
  size,
  theme,
};
