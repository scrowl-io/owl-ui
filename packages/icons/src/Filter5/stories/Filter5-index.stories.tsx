import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFilter5Props } from '../Filter5.types';

import { display } from './Filter5-display.stories';
import { appearance } from './Filter5-appearance.stories';
import { size } from './Filter5-size.stories';
import { theme } from './Filter5-theme.stories';

export const Filter5 = (args: IconsFilter5Props) => (
  <Icon {...args}></Icon>
);

Filter5.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Filter5.argTypes = {
  display,
  appearance,
  size,
  theme,
};
