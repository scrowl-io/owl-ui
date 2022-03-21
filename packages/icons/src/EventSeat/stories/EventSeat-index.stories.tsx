import * as React from 'react';
import { component as Icon } from '../index';
import { IconsEventSeatProps } from '../EventSeat.types';

import { display } from './EventSeat-display.stories';
import { appearance } from './EventSeat-appearance.stories';
import { size } from './EventSeat-size.stories';
import { theme } from './EventSeat-theme.stories';

export const EventSeat = (args: IconsEventSeatProps) => (
  <Icon {...args}></Icon>
);

EventSeat.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

EventSeat.argTypes = {
  display,
  appearance,
  size,
  theme,
};
