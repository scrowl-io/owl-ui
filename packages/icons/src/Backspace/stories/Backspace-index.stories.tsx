import * as React from 'react';
import { component as Icon } from '../index';
import { IconsBackspaceProps } from '../Backspace.types';

import { display } from './Backspace-display.stories';
import { appearance } from './Backspace-appearance.stories';
import { size } from './Backspace-size.stories';
import { theme } from './Backspace-theme.stories';

export const Backspace = (args: IconsBackspaceProps) => (
  <Icon {...args}></Icon>
);

Backspace.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Backspace.argTypes = {
  display,
  appearance,
  size,
  theme,
};
