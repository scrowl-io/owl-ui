import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLockOutlineProps } from '../LockOutline.types';

import { display } from './LockOutline-display.stories';
import { appearance } from './LockOutline-appearance.stories';
import { size } from './LockOutline-size.stories';
import { theme } from './LockOutline-theme.stories';

export const LockOutline = (args: IconsLockOutlineProps) => (
  <Icon {...args}></Icon>
);

LockOutline.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

LockOutline.argTypes = {
  display,
  appearance,
  size,
  theme,
};
