import * as React from 'react';
import { component as Icon } from '../index';
import { IconsKeyboardArrowDownProps } from '../KeyboardArrowDown.types';

import { display } from './KeyboardArrowDown-display.stories';
import { appearance } from './KeyboardArrowDown-appearance.stories';
import { size } from './KeyboardArrowDown-size.stories';
import { theme } from './KeyboardArrowDown-theme.stories';

export const KeyboardArrowDown = (args: IconsKeyboardArrowDownProps) => (
  <Icon {...args}></Icon>
);

KeyboardArrowDown.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

KeyboardArrowDown.argTypes = {
  display,
  appearance,
  size,
  theme,
};
