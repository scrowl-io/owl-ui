import * as React from 'react';
import { component as Icon } from '../index';
import { IconsKeyboardArrowUpProps } from '../KeyboardArrowUp.types';

import { display } from './KeyboardArrowUp-display.stories';
import { appearance } from './KeyboardArrowUp-appearance.stories';
import { size } from './KeyboardArrowUp-size.stories';
import { theme } from './KeyboardArrowUp-theme.stories';

export const KeyboardArrowUp = (args: IconsKeyboardArrowUpProps) => (
  <Icon {...args}></Icon>
);

KeyboardArrowUp.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

KeyboardArrowUp.argTypes = {
  display,
  appearance,
  size,
  theme,
};
