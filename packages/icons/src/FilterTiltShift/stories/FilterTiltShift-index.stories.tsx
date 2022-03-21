import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFilterTiltShiftProps } from '../FilterTiltShift.types';

import { display } from './FilterTiltShift-display.stories';
import { appearance } from './FilterTiltShift-appearance.stories';
import { size } from './FilterTiltShift-size.stories';
import { theme } from './FilterTiltShift-theme.stories';

export const FilterTiltShift = (args: IconsFilterTiltShiftProps) => (
  <Icon {...args}></Icon>
);

FilterTiltShift.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FilterTiltShift.argTypes = {
  display,
  appearance,
  size,
  theme,
};
