import * as React from 'react';
import { component as Icon } from '../index';
import { IconsRotateRightProps } from '../RotateRight.types';

import { display } from './RotateRight-display.stories';
import { appearance } from './RotateRight-appearance.stories';
import { size } from './RotateRight-size.stories';
import { theme } from './RotateRight-theme.stories';

export const RotateRight = (args: IconsRotateRightProps) => (
  <Icon {...args}></Icon>
);

RotateRight.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

RotateRight.argTypes = {
  display,
  appearance,
  size,
  theme,
};
