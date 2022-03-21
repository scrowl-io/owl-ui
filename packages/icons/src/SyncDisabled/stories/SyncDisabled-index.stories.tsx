import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSyncDisabledProps } from '../SyncDisabled.types';

import { display } from './SyncDisabled-display.stories';
import { appearance } from './SyncDisabled-appearance.stories';
import { size } from './SyncDisabled-size.stories';
import { theme } from './SyncDisabled-theme.stories';

export const SyncDisabled = (args: IconsSyncDisabledProps) => (
  <Icon {...args}></Icon>
);

SyncDisabled.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SyncDisabled.argTypes = {
  display,
  appearance,
  size,
  theme,
};
