import * as React from 'react';
import { component as Icon } from '../index';
import { IconsTerrainProps } from '../Terrain.types';

import { display } from './Terrain-display.stories';
import { appearance } from './Terrain-appearance.stories';
import { size } from './Terrain-size.stories';
import { theme } from './Terrain-theme.stories';

export const Terrain = (args: IconsTerrainProps) => (
  <Icon {...args}></Icon>
);

Terrain.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Terrain.argTypes = {
  display,
  appearance,
  size,
  theme,
};
