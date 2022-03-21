import * as React from 'react';
import { component as Icon } from '../index';
import { IconsArrowForwardProps } from '../ArrowForward.types';

import { display } from './ArrowForward-display.stories';
import { appearance } from './ArrowForward-appearance.stories';
import { size } from './ArrowForward-size.stories';
import { theme } from './ArrowForward-theme.stories';

export const ArrowForward = (args: IconsArrowForwardProps) => (
  <Icon {...args}></Icon>
);

ArrowForward.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ArrowForward.argTypes = {
  display,
  appearance,
  size,
  theme,
};
