import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLowPriorityProps } from '../LowPriority.types';

import { display } from './LowPriority-display.stories';
import { appearance } from './LowPriority-appearance.stories';
import { size } from './LowPriority-size.stories';
import { theme } from './LowPriority-theme.stories';

export const LowPriority = (args: IconsLowPriorityProps) => (
  <Icon {...args}></Icon>
);

LowPriority.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

LowPriority.argTypes = {
  display,
  appearance,
  size,
  theme,
};
