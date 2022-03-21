import * as React from 'react';
import { component as Icon } from '../index';
import { IconsKeyboardProps } from '../Keyboard.types';

import { display } from './Keyboard-display.stories';
import { appearance } from './Keyboard-appearance.stories';
import { size } from './Keyboard-size.stories';
import { theme } from './Keyboard-theme.stories';

export const Keyboard = (args: IconsKeyboardProps) => (
  <Icon {...args}></Icon>
);

Keyboard.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Keyboard.argTypes = {
  display,
  appearance,
  size,
  theme,
};
