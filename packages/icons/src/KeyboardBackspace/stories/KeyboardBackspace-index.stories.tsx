import * as React from 'react';
import { component as Icon } from '../index';
import { IconsKeyboardBackspaceProps } from '../KeyboardBackspace.types';

import { display } from './KeyboardBackspace-display.stories';
import { appearance } from './KeyboardBackspace-appearance.stories';
import { size } from './KeyboardBackspace-size.stories';
import { theme } from './KeyboardBackspace-theme.stories';

export const KeyboardBackspace = (args: IconsKeyboardBackspaceProps) => (
  <Icon {...args}></Icon>
);

KeyboardBackspace.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

KeyboardBackspace.argTypes = {
  display,
  appearance,
  size,
  theme,
};
