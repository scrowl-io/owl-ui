import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCompareArrowsProps } from '../CompareArrows.types';

import { display } from './CompareArrows-display.stories';
import { appearance } from './CompareArrows-appearance.stories';
import { size } from './CompareArrows-size.stories';
import { theme } from './CompareArrows-theme.stories';

export const CompareArrows = (args: IconsCompareArrowsProps) => (
  <Icon {...args}></Icon>
);

CompareArrows.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

CompareArrows.argTypes = {
  display,
  appearance,
  size,
  theme,
};
