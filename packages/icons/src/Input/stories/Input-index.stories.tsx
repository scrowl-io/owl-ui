import * as React from 'react';
import { component as Icon } from '../index';
import { IconsInputProps } from '../Input.types';

import { display } from './Input-display.stories';
import { appearance } from './Input-appearance.stories';
import { size } from './Input-size.stories';
import { theme } from './Input-theme.stories';

export const Input = (args: IconsInputProps) => (
  <Icon {...args}></Icon>
);

Input.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Input.argTypes = {
  display,
  appearance,
  size,
  theme,
};
