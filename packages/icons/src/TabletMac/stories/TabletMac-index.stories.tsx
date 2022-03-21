import * as React from 'react';
import { component as Icon } from '../index';
import { IconsTabletMacProps } from '../TabletMac.types';

import { display } from './TabletMac-display.stories';
import { appearance } from './TabletMac-appearance.stories';
import { size } from './TabletMac-size.stories';
import { theme } from './TabletMac-theme.stories';

export const TabletMac = (args: IconsTabletMacProps) => (
  <Icon {...args}></Icon>
);

TabletMac.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

TabletMac.argTypes = {
  display,
  appearance,
  size,
  theme,
};
