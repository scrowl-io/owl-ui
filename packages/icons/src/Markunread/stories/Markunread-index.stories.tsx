import * as React from 'react';
import { component as Icon } from '../index';
import { IconsMarkunreadProps } from '../Markunread.types';

import { display } from './Markunread-display.stories';
import { appearance } from './Markunread-appearance.stories';
import { size } from './Markunread-size.stories';
import { theme } from './Markunread-theme.stories';

export const Markunread = (args: IconsMarkunreadProps) => (
  <Icon {...args}></Icon>
);

Markunread.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Markunread.argTypes = {
  display,
  appearance,
  size,
  theme,
};
