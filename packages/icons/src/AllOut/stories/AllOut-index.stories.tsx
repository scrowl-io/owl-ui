import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAllOutProps } from '../AllOut.types';

import { display } from './AllOut-display.stories';
import { appearance } from './AllOut-appearance.stories';
import { size } from './AllOut-size.stories';
import { theme } from './AllOut-theme.stories';

export const AllOut = (args: IconsAllOutProps) => (
  <Icon {...args}></Icon>
);

AllOut.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

AllOut.argTypes = {
  display,
  appearance,
  size,
  theme,
};
