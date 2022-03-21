import * as React from 'react';
import { component as Icon } from '../index';
import { IconsKeyboardReturnProps } from '../KeyboardReturn.types';

import { display } from './KeyboardReturn-display.stories';
import { appearance } from './KeyboardReturn-appearance.stories';
import { size } from './KeyboardReturn-size.stories';
import { theme } from './KeyboardReturn-theme.stories';

export const KeyboardReturn = (args: IconsKeyboardReturnProps) => (
  <Icon {...args}></Icon>
);

KeyboardReturn.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

KeyboardReturn.argTypes = {
  display,
  appearance,
  size,
  theme,
};
