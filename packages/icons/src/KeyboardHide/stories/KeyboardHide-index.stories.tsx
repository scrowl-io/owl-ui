import * as React from 'react';
import { component as Icon } from '../index';
import { IconsKeyboardHideProps } from '../KeyboardHide.types';

import { display } from './KeyboardHide-display.stories';
import { appearance } from './KeyboardHide-appearance.stories';
import { size } from './KeyboardHide-size.stories';
import { theme } from './KeyboardHide-theme.stories';

export const KeyboardHide = (args: IconsKeyboardHideProps) => (
  <Icon {...args}></Icon>
);

KeyboardHide.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

KeyboardHide.argTypes = {
  display,
  appearance,
  size,
  theme,
};
