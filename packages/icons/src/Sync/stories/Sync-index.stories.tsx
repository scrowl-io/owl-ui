import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSyncProps } from '../Sync.types';

import { display } from './Sync-display.stories';
import { appearance } from './Sync-appearance.stories';
import { size } from './Sync-size.stories';
import { theme } from './Sync-theme.stories';

export const Sync = (args: IconsSyncProps) => (
  <Icon {...args}></Icon>
);

Sync.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Sync.argTypes = {
  display,
  appearance,
  size,
  theme,
};
