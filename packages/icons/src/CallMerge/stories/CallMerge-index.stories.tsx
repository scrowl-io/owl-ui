import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCallMergeProps } from '../CallMerge.types';

import { display } from './CallMerge-display.stories';
import { appearance } from './CallMerge-appearance.stories';
import { size } from './CallMerge-size.stories';
import { theme } from './CallMerge-theme.stories';

export const CallMerge = (args: IconsCallMergeProps) => (
  <Icon {...args}></Icon>
);

CallMerge.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

CallMerge.argTypes = {
  display,
  appearance,
  size,
  theme,
};
