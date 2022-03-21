import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFunctionsProps } from '../Functions.types';

import { display } from './Functions-display.stories';
import { appearance } from './Functions-appearance.stories';
import { size } from './Functions-size.stories';
import { theme } from './Functions-theme.stories';

export const Functions = (args: IconsFunctionsProps) => (
  <Icon {...args}></Icon>
);

Functions.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Functions.argTypes = {
  display,
  appearance,
  size,
  theme,
};
