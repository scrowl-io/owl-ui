import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFilter9Props } from '../Filter9.types';

import { display } from './Filter9-display.stories';
import { appearance } from './Filter9-appearance.stories';
import { size } from './Filter9-size.stories';
import { theme } from './Filter9-theme.stories';

export const Filter9 = (args: IconsFilter9Props) => (
  <Icon {...args}></Icon>
);

Filter9.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Filter9.argTypes = {
  display,
  appearance,
  size,
  theme,
};
