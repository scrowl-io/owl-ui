import * as React from 'react';
import { component as Icon } from '../index';
import { IconsVpnKeyProps } from '../VpnKey.types';

import { display } from './VpnKey-display.stories';
import { appearance } from './VpnKey-appearance.stories';
import { size } from './VpnKey-size.stories';
import { theme } from './VpnKey-theme.stories';

export const VpnKey = (args: IconsVpnKeyProps) => (
  <Icon {...args}></Icon>
);

VpnKey.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

VpnKey.argTypes = {
  display,
  appearance,
  size,
  theme,
};
