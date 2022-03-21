import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSnoozeProps } from '../Snooze.types';

import { display } from './Snooze-display.stories';
import { appearance } from './Snooze-appearance.stories';
import { size } from './Snooze-size.stories';
import { theme } from './Snooze-theme.stories';

export const Snooze = (args: IconsSnoozeProps) => (
  <Icon {...args}></Icon>
);

Snooze.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Snooze.argTypes = {
  display,
  appearance,
  size,
  theme,
};
