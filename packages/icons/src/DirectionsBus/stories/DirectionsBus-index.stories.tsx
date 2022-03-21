import * as React from 'react';
import { component as Icon } from '../index';
import { IconsDirectionsBusProps } from '../DirectionsBus.types';

import { display } from './DirectionsBus-display.stories';
import { appearance } from './DirectionsBus-appearance.stories';
import { size } from './DirectionsBus-size.stories';
import { theme } from './DirectionsBus-theme.stories';

export const DirectionsBus = (args: IconsDirectionsBusProps) => (
  <Icon {...args}></Icon>
);

DirectionsBus.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

DirectionsBus.argTypes = {
  display,
  appearance,
  size,
  theme,
};
