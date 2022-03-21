import * as React from 'react';
import { component as Icon } from '../index';
import { IconsKeyboardArrowRightProps } from '../KeyboardArrowRight.types';

import { display } from './KeyboardArrowRight-display.stories';
import { appearance } from './KeyboardArrowRight-appearance.stories';
import { size } from './KeyboardArrowRight-size.stories';
import { theme } from './KeyboardArrowRight-theme.stories';

export const KeyboardArrowRight = (args: IconsKeyboardArrowRightProps) => (
  <Icon {...args}></Icon>
);

KeyboardArrowRight.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

KeyboardArrowRight.argTypes = {
  display,
  appearance,
  size,
  theme,
};
