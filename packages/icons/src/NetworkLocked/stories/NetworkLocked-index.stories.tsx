import * as React from 'react';
import { component as Icon } from '../index';
import { IconsNetworkLockedProps } from '../NetworkLocked.types';

import { display } from './NetworkLocked-display.stories';
import { appearance } from './NetworkLocked-appearance.stories';
import { size } from './NetworkLocked-size.stories';
import { theme } from './NetworkLocked-theme.stories';

export const NetworkLocked = (args: IconsNetworkLockedProps) => (
  <Icon {...args}></Icon>
);

NetworkLocked.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

NetworkLocked.argTypes = {
  display,
  appearance,
  size,
  theme,
};
