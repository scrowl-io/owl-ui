import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCallMissedProps } from '../CallMissed.types';

import { display } from './CallMissed-display.stories';
import { appearance } from './CallMissed-appearance.stories';
import { size } from './CallMissed-size.stories';
import { theme } from './CallMissed-theme.stories';

export const CallMissed = (args: IconsCallMissedProps) => (
  <Icon {...args}></Icon>
);

CallMissed.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

CallMissed.argTypes = {
  display,
  appearance,
  size,
  theme,
};
