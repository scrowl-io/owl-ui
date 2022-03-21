import * as React from 'react';
import { component as Icon } from '../index';
import { IconsBorderTopProps } from '../BorderTop.types';

import { display } from './BorderTop-display.stories';
import { appearance } from './BorderTop-appearance.stories';
import { size } from './BorderTop-size.stories';
import { theme } from './BorderTop-theme.stories';

export const BorderTop = (args: IconsBorderTopProps) => (
  <Icon {...args}></Icon>
);

BorderTop.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

BorderTop.argTypes = {
  display,
  appearance,
  size,
  theme,
};
