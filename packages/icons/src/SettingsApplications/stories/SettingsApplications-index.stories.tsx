import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSettingsApplicationsProps } from '../SettingsApplications.types';

import { display } from './SettingsApplications-display.stories';
import { appearance } from './SettingsApplications-appearance.stories';
import { size } from './SettingsApplications-size.stories';
import { theme } from './SettingsApplications-theme.stories';

export const SettingsApplications = (args: IconsSettingsApplicationsProps) => (
  <Icon {...args}></Icon>
);

SettingsApplications.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SettingsApplications.argTypes = {
  display,
  appearance,
  size,
  theme,
};
