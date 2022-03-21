import * as React from 'react';
import { component as Icon } from '../index';
import { IconsRoomProps } from '../Room.types';

import { display } from './Room-display.stories';
import { appearance } from './Room-appearance.stories';
import { size } from './Room-size.stories';
import { theme } from './Room-theme.stories';

export const Room = (args: IconsRoomProps) => (
  <Icon {...args}></Icon>
);

Room.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Room.argTypes = {
  display,
  appearance,
  size,
  theme,
};
