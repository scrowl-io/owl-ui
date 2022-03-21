import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLocalCafeProps } from '../LocalCafe.types';

import { display } from './LocalCafe-display.stories';
import { appearance } from './LocalCafe-appearance.stories';
import { size } from './LocalCafe-size.stories';
import { theme } from './LocalCafe-theme.stories';

export const LocalCafe = (args: IconsLocalCafeProps) => (
  <Icon {...args}></Icon>
);

LocalCafe.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

LocalCafe.argTypes = {
  display,
  appearance,
  size,
  theme,
};
