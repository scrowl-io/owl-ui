import * as React from 'react';
import { component as Icon } from '../index';
import { IconsClearProps } from '../Clear.types';

import { display } from './Clear-display.stories';
import { appearance } from './Clear-appearance.stories';
import { size } from './Clear-size.stories';
import { theme } from './Clear-theme.stories';

export const Clear = (args: IconsClearProps) => (
  <Icon {...args}></Icon>
);

Clear.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Clear.argTypes = {
  display,
  appearance,
  size,
  theme,
};
