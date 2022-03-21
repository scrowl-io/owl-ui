import * as React from 'react';
import { component as Icon } from '../index';
import { IconsBorderBottomProps } from '../BorderBottom.types';

import { display } from './BorderBottom-display.stories';
import { appearance } from './BorderBottom-appearance.stories';
import { size } from './BorderBottom-size.stories';
import { theme } from './BorderBottom-theme.stories';

export const BorderBottom = (args: IconsBorderBottomProps) => (
  <Icon {...args}></Icon>
);

BorderBottom.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

BorderBottom.argTypes = {
  display,
  appearance,
  size,
  theme,
};
