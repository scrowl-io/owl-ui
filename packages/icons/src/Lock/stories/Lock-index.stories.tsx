import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLockProps } from '../Lock.types';

import { display } from './Lock-display.stories';
import { appearance } from './Lock-appearance.stories';
import { size } from './Lock-size.stories';
import { theme } from './Lock-theme.stories';

export const Lock = (args: IconsLockProps) => (
  <Icon {...args}></Icon>
);

Lock.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Lock.argTypes = {
  display,
  appearance,
  size,
  theme,
};
