import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPriorityHighProps } from '../PriorityHigh.types';

import { display } from './PriorityHigh-display.stories';
import { appearance } from './PriorityHigh-appearance.stories';
import { size } from './PriorityHigh-size.stories';
import { theme } from './PriorityHigh-theme.stories';

export const PriorityHigh = (args: IconsPriorityHighProps) => (
  <Icon {...args}></Icon>
);

PriorityHigh.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PriorityHigh.argTypes = {
  display,
  appearance,
  size,
  theme,
};
