import * as React from 'react';
import { component as Icon } from '../index';
import { IconsEventProps } from '../Event.types';

import { display } from './Event-display.stories';
import { appearance } from './Event-appearance.stories';
import { size } from './Event-size.stories';
import { theme } from './Event-theme.stories';

export const Event = (args: IconsEventProps) => (
  <Icon {...args}></Icon>
);

Event.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Event.argTypes = {
  display,
  appearance,
  size,
  theme,
};
