import * as React from 'react';
import { component as Icon } from '../index';
import { IconsArrowDropDownCircleProps } from '../ArrowDropDownCircle.types';

import { display } from './ArrowDropDownCircle-display.stories';
import { appearance } from './ArrowDropDownCircle-appearance.stories';
import { size } from './ArrowDropDownCircle-size.stories';
import { theme } from './ArrowDropDownCircle-theme.stories';

export const ArrowDropDownCircle = (args: IconsArrowDropDownCircleProps) => (
  <Icon {...args}></Icon>
);

ArrowDropDownCircle.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ArrowDropDownCircle.argTypes = {
  display,
  appearance,
  size,
  theme,
};
