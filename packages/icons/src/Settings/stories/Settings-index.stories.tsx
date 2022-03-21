import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSettingsProps } from '../Settings.types';

import { display } from './Settings-display.stories';
import { appearance } from './Settings-appearance.stories';
import { size } from './Settings-size.stories';
import { theme } from './Settings-theme.stories';

export const Settings = (args: IconsSettingsProps) => (
  <Icon {...args}></Icon>
);

Settings.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Settings.argTypes = {
  display,
  appearance,
  size,
  theme,
};
