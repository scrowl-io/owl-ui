import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSettingsOverscanProps } from '../SettingsOverscan.types';

import { display } from './SettingsOverscan-display.stories';
import { appearance } from './SettingsOverscan-appearance.stories';
import { size } from './SettingsOverscan-size.stories';
import { theme } from './SettingsOverscan-theme.stories';

export const SettingsOverscan = (args: IconsSettingsOverscanProps) => (
  <Icon {...args}></Icon>
);

SettingsOverscan.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SettingsOverscan.argTypes = {
  display,
  appearance,
  size,
  theme,
};
