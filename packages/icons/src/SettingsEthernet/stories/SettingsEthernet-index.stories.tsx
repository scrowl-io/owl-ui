import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSettingsEthernetProps } from '../SettingsEthernet.types';

import { display } from './SettingsEthernet-display.stories';
import { appearance } from './SettingsEthernet-appearance.stories';
import { size } from './SettingsEthernet-size.stories';
import { theme } from './SettingsEthernet-theme.stories';

export const SettingsEthernet = (args: IconsSettingsEthernetProps) => (
  <Icon {...args}></Icon>
);

SettingsEthernet.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SettingsEthernet.argTypes = {
  display,
  appearance,
  size,
  theme,
};
