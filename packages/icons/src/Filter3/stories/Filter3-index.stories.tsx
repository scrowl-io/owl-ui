import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFilter3Props } from '../Filter3.types';

import { display } from './Filter3-display.stories';
import { appearance } from './Filter3-appearance.stories';
import { size } from './Filter3-size.stories';
import { theme } from './Filter3-theme.stories';

export const Filter3 = (args: IconsFilter3Props) => (
  <Icon {...args}></Icon>
);

Filter3.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Filter3.argTypes = {
  display,
  appearance,
  size,
  theme,
};
