import * as React from 'react';
import { component as Icon } from '../index';
import { IconsKeyboardCapslockProps } from '../KeyboardCapslock.types';

import { display } from './KeyboardCapslock-display.stories';
import { appearance } from './KeyboardCapslock-appearance.stories';
import { size } from './KeyboardCapslock-size.stories';
import { theme } from './KeyboardCapslock-theme.stories';

export const KeyboardCapslock = (args: IconsKeyboardCapslockProps) => (
  <Icon {...args}></Icon>
);

KeyboardCapslock.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

KeyboardCapslock.argTypes = {
  display,
  appearance,
  size,
  theme,
};
