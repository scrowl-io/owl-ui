import * as React from 'react';
import { component as Icon } from '../index';
import { IconsDonutLargeProps } from '../DonutLarge.types';

import { display } from './DonutLarge-display.stories';
import { appearance } from './DonutLarge-appearance.stories';
import { size } from './DonutLarge-size.stories';
import { theme } from './DonutLarge-theme.stories';

export const DonutLarge = (args: IconsDonutLargeProps) => (
  <Icon {...args}></Icon>
);

DonutLarge.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

DonutLarge.argTypes = {
  display,
  appearance,
  size,
  theme,
};
