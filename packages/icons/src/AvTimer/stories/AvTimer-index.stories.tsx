import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAvTimerProps } from '../AvTimer.types';

import { display } from './AvTimer-display.stories';
import { appearance } from './AvTimer-appearance.stories';
import { size } from './AvTimer-size.stories';
import { theme } from './AvTimer-theme.stories';

export const AvTimer = (args: IconsAvTimerProps) => (
  <Icon {...args}></Icon>
);

AvTimer.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

AvTimer.argTypes = {
  display,
  appearance,
  size,
  theme,
};
