import * as React from 'react';
import { component as Icon } from '../index';
import { IconsGamepadProps } from '../Gamepad.types';

import { display } from './Gamepad-display.stories';
import { appearance } from './Gamepad-appearance.stories';
import { size } from './Gamepad-size.stories';
import { theme } from './Gamepad-theme.stories';

export const Gamepad = (args: IconsGamepadProps) => (
  <Icon {...args}></Icon>
);

Gamepad.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Gamepad.argTypes = {
  display,
  appearance,
  size,
  theme,
};
