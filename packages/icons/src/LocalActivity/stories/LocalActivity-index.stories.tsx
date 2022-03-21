import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLocalActivityProps } from '../LocalActivity.types';

import { display } from './LocalActivity-display.stories';
import { appearance } from './LocalActivity-appearance.stories';
import { size } from './LocalActivity-size.stories';
import { theme } from './LocalActivity-theme.stories';

export const LocalActivity = (args: IconsLocalActivityProps) => (
  <Icon {...args}></Icon>
);

LocalActivity.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

LocalActivity.argTypes = {
  display,
  appearance,
  size,
  theme,
};
