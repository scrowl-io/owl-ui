import * as React from 'react';
import { component as Icon } from '../index';
import { IconsBorderLeftProps } from '../BorderLeft.types';

import { display } from './BorderLeft-display.stories';
import { appearance } from './BorderLeft-appearance.stories';
import { size } from './BorderLeft-size.stories';
import { theme } from './BorderLeft-theme.stories';

export const BorderLeft = (args: IconsBorderLeftProps) => (
  <Icon {...args}></Icon>
);

BorderLeft.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

BorderLeft.argTypes = {
  display,
  appearance,
  size,
  theme,
};
