import * as React from 'react';
import { component as Icon } from '../index';
import { IconsTheatersProps } from '../Theaters.types';

import { display } from './Theaters-display.stories';
import { appearance } from './Theaters-appearance.stories';
import { size } from './Theaters-size.stories';
import { theme } from './Theaters-theme.stories';

export const Theaters = (args: IconsTheatersProps) => (
  <Icon {...args}></Icon>
);

Theaters.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Theaters.argTypes = {
  display,
  appearance,
  size,
  theme,
};
