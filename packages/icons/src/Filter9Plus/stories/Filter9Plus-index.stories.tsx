import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFilter9PlusProps } from '../Filter9Plus.types';

import { display } from './Filter9Plus-display.stories';
import { appearance } from './Filter9Plus-appearance.stories';
import { size } from './Filter9Plus-size.stories';
import { theme } from './Filter9Plus-theme.stories';

export const Filter9Plus = (args: IconsFilter9PlusProps) => (
  <Icon {...args}></Icon>
);

Filter9Plus.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Filter9Plus.argTypes = {
  display,
  appearance,
  size,
  theme,
};
