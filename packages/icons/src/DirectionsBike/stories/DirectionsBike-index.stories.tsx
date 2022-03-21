import * as React from 'react';
import { component as Icon } from '../index';
import { IconsDirectionsBikeProps } from '../DirectionsBike.types';

import { display } from './DirectionsBike-display.stories';
import { appearance } from './DirectionsBike-appearance.stories';
import { size } from './DirectionsBike-size.stories';
import { theme } from './DirectionsBike-theme.stories';

export const DirectionsBike = (args: IconsDirectionsBikeProps) => (
  <Icon {...args}></Icon>
);

DirectionsBike.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

DirectionsBike.argTypes = {
  display,
  appearance,
  size,
  theme,
};
