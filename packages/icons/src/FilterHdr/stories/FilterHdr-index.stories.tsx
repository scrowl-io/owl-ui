import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFilterHdrProps } from '../FilterHdr.types';

import { display } from './FilterHdr-display.stories';
import { appearance } from './FilterHdr-appearance.stories';
import { size } from './FilterHdr-size.stories';
import { theme } from './FilterHdr-theme.stories';

export const FilterHdr = (args: IconsFilterHdrProps) => (
  <Icon {...args}></Icon>
);

FilterHdr.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FilterHdr.argTypes = {
  display,
  appearance,
  size,
  theme,
};
