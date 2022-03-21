import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFilter2Props } from '../Filter2.types';

import { display } from './Filter2-display.stories';
import { appearance } from './Filter2-appearance.stories';
import { size } from './Filter2-size.stories';
import { theme } from './Filter2-theme.stories';

export const Filter2 = (args: IconsFilter2Props) => (
  <Icon {...args}></Icon>
);

Filter2.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Filter2.argTypes = {
  display,
  appearance,
  size,
  theme,
};
