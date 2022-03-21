import * as React from 'react';
import { component as Icon } from '../index';
import { IconsStarProps } from '../Star.types';

import { display } from './Star-display.stories';
import { appearance } from './Star-appearance.stories';
import { size } from './Star-size.stories';
import { theme } from './Star-theme.stories';

export const Star = (args: IconsStarProps) => (
  <Icon {...args}></Icon>
);

Star.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Star.argTypes = {
  display,
  appearance,
  size,
  theme,
};
