import * as React from 'react';
import { component as Icon } from '../index';
import { IconsRoomServiceProps } from '../RoomService.types';

import { display } from './RoomService-display.stories';
import { appearance } from './RoomService-appearance.stories';
import { size } from './RoomService-size.stories';
import { theme } from './RoomService-theme.stories';

export const RoomService = (args: IconsRoomServiceProps) => (
  <Icon {...args}></Icon>
);

RoomService.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

RoomService.argTypes = {
  display,
  appearance,
  size,
  theme,
};
