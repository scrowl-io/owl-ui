import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSkipPreviousProps } from '../SkipPrevious.types';

import { display } from './SkipPrevious-display.stories';
import { appearance } from './SkipPrevious-appearance.stories';
import { size } from './SkipPrevious-size.stories';
import { theme } from './SkipPrevious-theme.stories';

export const SkipPrevious = (args: IconsSkipPreviousProps) => (
  <Icon {...args}></Icon>
);

SkipPrevious.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SkipPrevious.argTypes = {
  display,
  appearance,
  size,
  theme,
};
