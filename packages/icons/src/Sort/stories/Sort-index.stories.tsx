import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSortProps } from '../Sort.types';

import { display } from './Sort-display.stories';
import { appearance } from './Sort-appearance.stories';
import { size } from './Sort-size.stories';
import { theme } from './Sort-theme.stories';

export const Sort = (args: IconsSortProps) => (
  <Icon {...args}></Icon>
);

Sort.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Sort.argTypes = {
  display,
  appearance,
  size,
  theme,
};
