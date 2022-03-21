import * as React from 'react';
import { component as Icon } from '../index';
import { IconsNoSimProps } from '../NoSim.types';

import { display } from './NoSim-display.stories';
import { appearance } from './NoSim-appearance.stories';
import { size } from './NoSim-size.stories';
import { theme } from './NoSim-theme.stories';

export const NoSim = (args: IconsNoSimProps) => (
  <Icon {...args}></Icon>
);

NoSim.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

NoSim.argTypes = {
  display,
  appearance,
  size,
  theme,
};
