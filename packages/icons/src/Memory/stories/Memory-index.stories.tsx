import * as React from 'react';
import { component as Icon } from '../index';
import { IconsMemoryProps } from '../Memory.types';

import { display } from './Memory-display.stories';
import { appearance } from './Memory-appearance.stories';
import { size } from './Memory-size.stories';
import { theme } from './Memory-theme.stories';

export const Memory = (args: IconsMemoryProps) => (
  <Icon {...args}></Icon>
);

Memory.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Memory.argTypes = {
  display,
  appearance,
  size,
  theme,
};
