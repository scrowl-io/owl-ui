import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCompareProps } from '../Compare.types';

import { display } from './Compare-display.stories';
import { appearance } from './Compare-appearance.stories';
import { size } from './Compare-size.stories';
import { theme } from './Compare-theme.stories';

export const Compare = (args: IconsCompareProps) => (
  <Icon {...args}></Icon>
);

Compare.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Compare.argTypes = {
  display,
  appearance,
  size,
  theme,
};
