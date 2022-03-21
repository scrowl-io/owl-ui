import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFilter8Props } from '../Filter8.types';

import { display } from './Filter8-display.stories';
import { appearance } from './Filter8-appearance.stories';
import { size } from './Filter8-size.stories';
import { theme } from './Filter8-theme.stories';

export const Filter8 = (args: IconsFilter8Props) => (
  <Icon {...args}></Icon>
);

Filter8.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Filter8.argTypes = {
  display,
  appearance,
  size,
  theme,
};
