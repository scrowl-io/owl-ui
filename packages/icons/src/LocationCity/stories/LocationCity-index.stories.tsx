import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLocationCityProps } from '../LocationCity.types';

import { display } from './LocationCity-display.stories';
import { appearance } from './LocationCity-appearance.stories';
import { size } from './LocationCity-size.stories';
import { theme } from './LocationCity-theme.stories';

export const LocationCity = (args: IconsLocationCityProps) => (
  <Icon {...args}></Icon>
);

LocationCity.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

LocationCity.argTypes = {
  display,
  appearance,
  size,
  theme,
};
