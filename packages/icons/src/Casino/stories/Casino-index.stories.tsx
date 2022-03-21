import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCasinoProps } from '../Casino.types';

import { display } from './Casino-display.stories';
import { appearance } from './Casino-appearance.stories';
import { size } from './Casino-size.stories';
import { theme } from './Casino-theme.stories';

export const Casino = (args: IconsCasinoProps) => (
  <Icon {...args}></Icon>
);

Casino.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Casino.argTypes = {
  display,
  appearance,
  size,
  theme,
};
