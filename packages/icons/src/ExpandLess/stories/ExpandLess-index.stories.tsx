import * as React from 'react';
import { component as Icon } from '../index';
import { IconsExpandLessProps } from '../ExpandLess.types';

import { display } from './ExpandLess-display.stories';
import { appearance } from './ExpandLess-appearance.stories';
import { size } from './ExpandLess-size.stories';
import { theme } from './ExpandLess-theme.stories';

export const ExpandLess = (args: IconsExpandLessProps) => (
  <Icon {...args}></Icon>
);

ExpandLess.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ExpandLess.argTypes = {
  display,
  appearance,
  size,
  theme,
};
