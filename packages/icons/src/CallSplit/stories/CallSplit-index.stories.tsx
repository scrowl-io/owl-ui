import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCallSplitProps } from '../CallSplit.types';

import { display } from './CallSplit-display.stories';
import { appearance } from './CallSplit-appearance.stories';
import { size } from './CallSplit-size.stories';
import { theme } from './CallSplit-theme.stories';

export const CallSplit = (args: IconsCallSplitProps) => (
  <Icon {...args}></Icon>
);

CallSplit.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

CallSplit.argTypes = {
  display,
  appearance,
  size,
  theme,
};
