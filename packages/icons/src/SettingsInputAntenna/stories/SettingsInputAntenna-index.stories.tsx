import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSettingsInputAntennaProps } from '../SettingsInputAntenna.types';

import { display } from './SettingsInputAntenna-display.stories';
import { appearance } from './SettingsInputAntenna-appearance.stories';
import { size } from './SettingsInputAntenna-size.stories';
import { theme } from './SettingsInputAntenna-theme.stories';

export const SettingsInputAntenna = (args: IconsSettingsInputAntennaProps) => (
  <Icon {...args}></Icon>
);

SettingsInputAntenna.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SettingsInputAntenna.argTypes = {
  display,
  appearance,
  size,
  theme,
};
