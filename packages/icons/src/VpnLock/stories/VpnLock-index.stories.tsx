import * as React from 'react';
import { component as Icon } from '../index';
import { IconsVpnLockProps } from '../VpnLock.types';

import { display } from './VpnLock-display.stories';
import { appearance } from './VpnLock-appearance.stories';
import { size } from './VpnLock-size.stories';
import { theme } from './VpnLock-theme.stories';

export const VpnLock = (args: IconsVpnLockProps) => (
  <Icon {...args}></Icon>
);

VpnLock.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

VpnLock.argTypes = {
  display,
  appearance,
  size,
  theme,
};
