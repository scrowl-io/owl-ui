import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLockOpenProps } from '../LockOpen.types';

import { display } from './LockOpen-display.stories';
import { appearance } from './LockOpen-appearance.stories';
import { size } from './LockOpen-size.stories';
import { theme } from './LockOpen-theme.stories';

export const LockOpen = (args: IconsLockOpenProps) => (
  <Icon {...args}></Icon>
);

LockOpen.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

LockOpen.argTypes = {
  display,
  appearance,
  size,
  theme,
};
