import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLandscapeProps } from '../Landscape.types';

import { display } from './Landscape-display.stories';
import { appearance } from './Landscape-appearance.stories';
import { size } from './Landscape-size.stories';
import { theme } from './Landscape-theme.stories';

export const Landscape = (args: IconsLandscapeProps) => (
  <Icon {...args}></Icon>
);

Landscape.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Landscape.argTypes = {
  display,
  appearance,
  size,
  theme,
};
