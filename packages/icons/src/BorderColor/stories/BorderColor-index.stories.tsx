import * as React from 'react';
import { component as Icon } from '../index';
import { IconsBorderColorProps } from '../BorderColor.types';

import { display } from './BorderColor-display.stories';
import { appearance } from './BorderColor-appearance.stories';
import { size } from './BorderColor-size.stories';
import { theme } from './BorderColor-theme.stories';

export const BorderColor = (args: IconsBorderColorProps) => (
  <Icon {...args}></Icon>
);

BorderColor.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

BorderColor.argTypes = {
  display,
  appearance,
  size,
  theme,
};
