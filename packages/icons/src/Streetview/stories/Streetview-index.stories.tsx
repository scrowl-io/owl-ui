import * as React from 'react';
import { component as Icon } from '../index';
import { IconsStreetviewProps } from '../Streetview.types';

import { display } from './Streetview-display.stories';
import { appearance } from './Streetview-appearance.stories';
import { size } from './Streetview-size.stories';
import { theme } from './Streetview-theme.stories';

export const Streetview = (args: IconsStreetviewProps) => (
  <Icon {...args}></Icon>
);

Streetview.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Streetview.argTypes = {
  display,
  appearance,
  size,
  theme,
};
