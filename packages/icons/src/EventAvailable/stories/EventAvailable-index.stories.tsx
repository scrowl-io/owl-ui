import * as React from 'react';
import { component as Icon } from '../index';
import { IconsEventAvailableProps } from '../EventAvailable.types';

import { display } from './EventAvailable-display.stories';
import { appearance } from './EventAvailable-appearance.stories';
import { size } from './EventAvailable-size.stories';
import { theme } from './EventAvailable-theme.stories';

export const EventAvailable = (args: IconsEventAvailableProps) => (
  <Icon {...args}></Icon>
);

EventAvailable.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

EventAvailable.argTypes = {
  display,
  appearance,
  size,
  theme,
};
