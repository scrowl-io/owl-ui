import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPersonOutlineProps } from '../PersonOutline.types';

import { display } from './PersonOutline-display.stories';
import { appearance } from './PersonOutline-appearance.stories';
import { size } from './PersonOutline-size.stories';
import { theme } from './PersonOutline-theme.stories';

export const PersonOutline = (args: IconsPersonOutlineProps) => (
  <Icon {...args}></Icon>
);

PersonOutline.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PersonOutline.argTypes = {
  display,
  appearance,
  size,
  theme,
};
