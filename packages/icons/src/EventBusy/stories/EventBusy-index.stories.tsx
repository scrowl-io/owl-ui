import * as React from 'react';
import { component as Icon } from '../index';
import { IconsEventBusyProps } from '../EventBusy.types';

import { display } from './EventBusy-display.stories';
import { appearance } from './EventBusy-appearance.stories';
import { size } from './EventBusy-size.stories';
import { theme } from './EventBusy-theme.stories';

export const EventBusy = (args: IconsEventBusyProps) => (
  <Icon {...args}></Icon>
);

EventBusy.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

EventBusy.argTypes = {
  display,
  appearance,
  size,
  theme,
};
