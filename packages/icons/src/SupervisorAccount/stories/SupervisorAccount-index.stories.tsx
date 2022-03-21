import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSupervisorAccountProps } from '../SupervisorAccount.types';

import { display } from './SupervisorAccount-display.stories';
import { appearance } from './SupervisorAccount-appearance.stories';
import { size } from './SupervisorAccount-size.stories';
import { theme } from './SupervisorAccount-theme.stories';

export const SupervisorAccount = (args: IconsSupervisorAccountProps) => (
  <Icon {...args}></Icon>
);

SupervisorAccount.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SupervisorAccount.argTypes = {
  display,
  appearance,
  size,
  theme,
};
