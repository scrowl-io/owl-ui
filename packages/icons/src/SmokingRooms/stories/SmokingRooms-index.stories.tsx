import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSmokingRoomsProps } from '../SmokingRooms.types';

import { display } from './SmokingRooms-display.stories';
import { appearance } from './SmokingRooms-appearance.stories';
import { size } from './SmokingRooms-size.stories';
import { theme } from './SmokingRooms-theme.stories';

export const SmokingRooms = (args: IconsSmokingRoomsProps) => (
  <Icon {...args}></Icon>
);

SmokingRooms.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SmokingRooms.argTypes = {
  display,
  appearance,
  size,
  theme,
};
