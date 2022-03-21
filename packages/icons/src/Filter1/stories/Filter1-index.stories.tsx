import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFilter1Props } from '../Filter1.types';

import { display } from './Filter1-display.stories';
import { appearance } from './Filter1-appearance.stories';
import { size } from './Filter1-size.stories';
import { theme } from './Filter1-theme.stories';

export const Filter1 = (args: IconsFilter1Props) => (
  <Icon {...args}></Icon>
);

Filter1.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Filter1.argTypes = {
  display,
  appearance,
  size,
  theme,
};
