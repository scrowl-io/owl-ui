import * as React from 'react';
import { component as Icon } from '../index';
import { IconsKeyboardTabProps } from '../KeyboardTab.types';

import { display } from './KeyboardTab-display.stories';
import { appearance } from './KeyboardTab-appearance.stories';
import { size } from './KeyboardTab-size.stories';
import { theme } from './KeyboardTab-theme.stories';

export const KeyboardTab = (args: IconsKeyboardTabProps) => (
  <Icon {...args}></Icon>
);

KeyboardTab.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

KeyboardTab.argTypes = {
  display,
  appearance,
  size,
  theme,
};
