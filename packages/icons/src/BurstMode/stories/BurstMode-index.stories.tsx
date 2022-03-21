import * as React from 'react';
import { component as Icon } from '../index';
import { IconsBurstModeProps } from '../BurstMode.types';

import { display } from './BurstMode-display.stories';
import { appearance } from './BurstMode-appearance.stories';
import { size } from './BurstMode-size.stories';
import { theme } from './BurstMode-theme.stories';

export const BurstMode = (args: IconsBurstModeProps) => (
  <Icon {...args}></Icon>
);

BurstMode.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

BurstMode.argTypes = {
  display,
  appearance,
  size,
  theme,
};
