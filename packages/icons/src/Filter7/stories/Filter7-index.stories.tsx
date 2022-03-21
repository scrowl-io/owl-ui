import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFilter7Props } from '../Filter7.types';

import { display } from './Filter7-display.stories';
import { appearance } from './Filter7-appearance.stories';
import { size } from './Filter7-size.stories';
import { theme } from './Filter7-theme.stories';

export const Filter7 = (args: IconsFilter7Props) => (
  <Icon {...args}></Icon>
);

Filter7.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Filter7.argTypes = {
  display,
  appearance,
  size,
  theme,
};
