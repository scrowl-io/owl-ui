import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFilterNoneProps } from '../FilterNone.types';

import { display } from './FilterNone-display.stories';
import { appearance } from './FilterNone-appearance.stories';
import { size } from './FilterNone-size.stories';
import { theme } from './FilterNone-theme.stories';

export const FilterNone = (args: IconsFilterNoneProps) => (
  <Icon {...args}></Icon>
);

FilterNone.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FilterNone.argTypes = {
  display,
  appearance,
  size,
  theme,
};
