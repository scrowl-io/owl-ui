import * as React from 'react';
import { component as Icon } from '../index';
import { IconsBorderStyleProps } from '../BorderStyle.types';

import { display } from './BorderStyle-display.stories';
import { appearance } from './BorderStyle-appearance.stories';
import { size } from './BorderStyle-size.stories';
import { theme } from './BorderStyle-theme.stories';

export const BorderStyle = (args: IconsBorderStyleProps) => (
  <Icon {...args}></Icon>
);

BorderStyle.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

BorderStyle.argTypes = {
  display,
  appearance,
  size,
  theme,
};
