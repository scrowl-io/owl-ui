import * as React from 'react';
import { component as Icon } from '../index';
import { IconsBorderHorizontalProps } from '../BorderHorizontal.types';

import { display } from './BorderHorizontal-display.stories';
import { appearance } from './BorderHorizontal-appearance.stories';
import { size } from './BorderHorizontal-size.stories';
import { theme } from './BorderHorizontal-theme.stories';

export const BorderHorizontal = (args: IconsBorderHorizontalProps) => (
  <Icon {...args}></Icon>
);

BorderHorizontal.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

BorderHorizontal.argTypes = {
  display,
  appearance,
  size,
  theme,
};
