import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPlaceProps } from '../Place.types';

import { display } from './Place-display.stories';
import { appearance } from './Place-appearance.stories';
import { size } from './Place-size.stories';
import { theme } from './Place-theme.stories';

export const Place = (args: IconsPlaceProps) => (
  <Icon {...args}></Icon>
);

Place.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Place.argTypes = {
  display,
  appearance,
  size,
  theme,
};
