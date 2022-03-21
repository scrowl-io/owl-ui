import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLocationSearchingProps } from '../LocationSearching.types';

import { display } from './LocationSearching-display.stories';
import { appearance } from './LocationSearching-appearance.stories';
import { size } from './LocationSearching-size.stories';
import { theme } from './LocationSearching-theme.stories';

export const LocationSearching = (args: IconsLocationSearchingProps) => (
  <Icon {...args}></Icon>
);

LocationSearching.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

LocationSearching.argTypes = {
  display,
  appearance,
  size,
  theme,
};
