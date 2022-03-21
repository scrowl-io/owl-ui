import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLoupeProps } from '../Loupe.types';

import { display } from './Loupe-display.stories';
import { appearance } from './Loupe-appearance.stories';
import { size } from './Loupe-size.stories';
import { theme } from './Loupe-theme.stories';

export const Loupe = (args: IconsLoupeProps) => (
  <Icon {...args}></Icon>
);

Loupe.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Loupe.argTypes = {
  display,
  appearance,
  size,
  theme,
};
