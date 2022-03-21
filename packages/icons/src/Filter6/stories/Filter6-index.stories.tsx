import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFilter6Props } from '../Filter6.types';

import { display } from './Filter6-display.stories';
import { appearance } from './Filter6-appearance.stories';
import { size } from './Filter6-size.stories';
import { theme } from './Filter6-theme.stories';

export const Filter6 = (args: IconsFilter6Props) => (
  <Icon {...args}></Icon>
);

Filter6.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Filter6.argTypes = {
  display,
  appearance,
  size,
  theme,
};
