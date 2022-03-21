import * as React from 'react';
import { component as Icon } from '../index';
import { IconsRotateLeftProps } from '../RotateLeft.types';

import { display } from './RotateLeft-display.stories';
import { appearance } from './RotateLeft-appearance.stories';
import { size } from './RotateLeft-size.stories';
import { theme } from './RotateLeft-theme.stories';

export const RotateLeft = (args: IconsRotateLeftProps) => (
  <Icon {...args}></Icon>
);

RotateLeft.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

RotateLeft.argTypes = {
  display,
  appearance,
  size,
  theme,
};
