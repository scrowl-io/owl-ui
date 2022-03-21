import * as React from 'react';
import { component as Icon } from '../index';
import { IconsDoNotDisturbOffProps } from '../DoNotDisturbOff.types';

import { display } from './DoNotDisturbOff-display.stories';
import { appearance } from './DoNotDisturbOff-appearance.stories';
import { size } from './DoNotDisturbOff-size.stories';
import { theme } from './DoNotDisturbOff-theme.stories';

export const DoNotDisturbOff = (args: IconsDoNotDisturbOffProps) => (
  <Icon {...args}></Icon>
);

DoNotDisturbOff.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

DoNotDisturbOff.argTypes = {
  display,
  appearance,
  size,
  theme,
};
