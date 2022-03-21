import * as React from 'react';
import { component as Icon } from '../index';
import { IconsKeyboardArrowLeftProps } from '../KeyboardArrowLeft.types';

import { display } from './KeyboardArrowLeft-display.stories';
import { appearance } from './KeyboardArrowLeft-appearance.stories';
import { size } from './KeyboardArrowLeft-size.stories';
import { theme } from './KeyboardArrowLeft-theme.stories';

export const KeyboardArrowLeft = (args: IconsKeyboardArrowLeftProps) => (
  <Icon {...args}></Icon>
);

KeyboardArrowLeft.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

KeyboardArrowLeft.argTypes = {
  display,
  appearance,
  size,
  theme,
};
