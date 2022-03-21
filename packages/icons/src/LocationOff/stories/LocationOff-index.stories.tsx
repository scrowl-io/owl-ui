import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLocationOffProps } from '../LocationOff.types';

import { display } from './LocationOff-display.stories';
import { appearance } from './LocationOff-appearance.stories';
import { size } from './LocationOff-size.stories';
import { theme } from './LocationOff-theme.stories';

export const LocationOff = (args: IconsLocationOffProps) => (
  <Icon {...args}></Icon>
);

LocationOff.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

LocationOff.argTypes = {
  display,
  appearance,
  size,
  theme,
};
