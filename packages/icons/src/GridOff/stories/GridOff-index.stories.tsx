import * as React from 'react';
import { component as Icon } from '../index';
import { IconsGridOffProps } from '../GridOff.types';

import { display } from './GridOff-display.stories';
import { appearance } from './GridOff-appearance.stories';
import { size } from './GridOff-size.stories';
import { theme } from './GridOff-theme.stories';

export const GridOff = (args: IconsGridOffProps) => (
  <Icon {...args}></Icon>
);

GridOff.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

GridOff.argTypes = {
  display,
  appearance,
  size,
  theme,
};
