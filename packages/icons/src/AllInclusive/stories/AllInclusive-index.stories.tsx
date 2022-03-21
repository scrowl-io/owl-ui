import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAllInclusiveProps } from '../AllInclusive.types';

import { display } from './AllInclusive-display.stories';
import { appearance } from './AllInclusive-appearance.stories';
import { size } from './AllInclusive-size.stories';
import { theme } from './AllInclusive-theme.stories';

export const AllInclusive = (args: IconsAllInclusiveProps) => (
  <Icon {...args}></Icon>
);

AllInclusive.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

AllInclusive.argTypes = {
  display,
  appearance,
  size,
  theme,
};
