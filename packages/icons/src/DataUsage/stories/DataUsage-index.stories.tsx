import * as React from 'react';
import { component as Icon } from '../index';
import { IconsDataUsageProps } from '../DataUsage.types';

import { display } from './DataUsage-display.stories';
import { appearance } from './DataUsage-appearance.stories';
import { size } from './DataUsage-size.stories';
import { theme } from './DataUsage-theme.stories';

export const DataUsage = (args: IconsDataUsageProps) => (
  <Icon {...args}></Icon>
);

DataUsage.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

DataUsage.argTypes = {
  display,
  appearance,
  size,
  theme,
};
