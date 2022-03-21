import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSyncProblemProps } from '../SyncProblem.types';

import { display } from './SyncProblem-display.stories';
import { appearance } from './SyncProblem-appearance.stories';
import { size } from './SyncProblem-size.stories';
import { theme } from './SyncProblem-theme.stories';

export const SyncProblem = (args: IconsSyncProblemProps) => (
  <Icon {...args}></Icon>
);

SyncProblem.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SyncProblem.argTypes = {
  display,
  appearance,
  size,
  theme,
};
