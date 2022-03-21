import * as React from 'react';
import { component as Icon } from '../index';
import { IconsUnfoldMoreProps } from '../UnfoldMore.types';

import { display } from './UnfoldMore-display.stories';
import { appearance } from './UnfoldMore-appearance.stories';
import { size } from './UnfoldMore-size.stories';
import { theme } from './UnfoldMore-theme.stories';

export const UnfoldMore = (args: IconsUnfoldMoreProps) => (
  <Icon {...args}></Icon>
);

UnfoldMore.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

UnfoldMore.argTypes = {
  display,
  appearance,
  size,
  theme,
};
