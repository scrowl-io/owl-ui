import * as React from 'react';
import { component as Icon } from '../index';
import { IconsMapProps } from '../Map.types';

import { display } from './Map-display.stories';
import { appearance } from './Map-appearance.stories';
import { size } from './Map-size.stories';
import { theme } from './Map-theme.stories';

export const Map = (args: IconsMapProps) => (
  <Icon {...args}></Icon>
);

Map.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Map.argTypes = {
  display,
  appearance,
  size,
  theme,
};
