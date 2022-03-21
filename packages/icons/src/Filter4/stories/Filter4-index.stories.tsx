import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFilter4Props } from '../Filter4.types';

import { display } from './Filter4-display.stories';
import { appearance } from './Filter4-appearance.stories';
import { size } from './Filter4-size.stories';
import { theme } from './Filter4-theme.stories';

export const Filter4 = (args: IconsFilter4Props) => (
  <Icon {...args}></Icon>
);

Filter4.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Filter4.argTypes = {
  display,
  appearance,
  size,
  theme,
};
