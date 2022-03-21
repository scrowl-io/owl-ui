import * as React from 'react';
import { component as Icon } from '../index';
import { IconsWifiTetheringProps } from '../WifiTethering.types';

import { display } from './WifiTethering-display.stories';
import { appearance } from './WifiTethering-appearance.stories';
import { size } from './WifiTethering-size.stories';
import { theme } from './WifiTethering-theme.stories';

export const WifiTethering = (args: IconsWifiTetheringProps) => (
  <Icon {...args}></Icon>
);

WifiTethering.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

WifiTethering.argTypes = {
  display,
  appearance,
  size,
  theme,
};
