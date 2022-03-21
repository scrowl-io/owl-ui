import * as React from 'react';
import { component as Icon } from '../index';
import { IconsArrowDropDownProps } from '../ArrowDropDown.types';

import { display } from './ArrowDropDown-display.stories';
import { appearance } from './ArrowDropDown-appearance.stories';
import { size } from './ArrowDropDown-size.stories';
import { theme } from './ArrowDropDown-theme.stories';

export const ArrowDropDown = (args: IconsArrowDropDownProps) => (
  <Icon {...args}></Icon>
);

ArrowDropDown.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ArrowDropDown.argTypes = {
  display,
  appearance,
  size,
  theme,
};
