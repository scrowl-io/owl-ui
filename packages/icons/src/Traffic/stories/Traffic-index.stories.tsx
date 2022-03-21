import * as React from 'react';
import { component as Icon } from '../index';
import { IconsTrafficProps } from '../Traffic.types';

import { display } from './Traffic-display.stories';
import { appearance } from './Traffic-appearance.stories';
import { size } from './Traffic-size.stories';
import { theme } from './Traffic-theme.stories';

export const Traffic = (args: IconsTrafficProps) => (
  <Icon {...args}></Icon>
);

Traffic.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Traffic.argTypes = {
  display,
  appearance,
  size,
  theme,
};
