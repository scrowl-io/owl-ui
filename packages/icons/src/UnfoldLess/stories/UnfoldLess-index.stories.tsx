import * as React from 'react';
import { component as Icon } from '../index';
import { IconsUnfoldLessProps } from '../UnfoldLess.types';

import { display } from './UnfoldLess-display.stories';
import { appearance } from './UnfoldLess-appearance.stories';
import { size } from './UnfoldLess-size.stories';
import { theme } from './UnfoldLess-theme.stories';

export const UnfoldLess = (args: IconsUnfoldLessProps) => (
  <Icon {...args}></Icon>
);

UnfoldLess.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

UnfoldLess.argTypes = {
  display,
  appearance,
  size,
  theme,
};
