import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLocalDiningProps } from '../LocalDining.types';

import { display } from './LocalDining-display.stories';
import { appearance } from './LocalDining-appearance.stories';
import { size } from './LocalDining-size.stories';
import { theme } from './LocalDining-theme.stories';

export const LocalDining = (args: IconsLocalDiningProps) => (
  <Icon {...args}></Icon>
);

LocalDining.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

LocalDining.argTypes = {
  display,
  appearance,
  size,
  theme,
};
