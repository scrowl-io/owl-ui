import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSettingsInputComponentProps } from '../SettingsInputComponent.types';

import { display } from './SettingsInputComponent-display.stories';
import { appearance } from './SettingsInputComponent-appearance.stories';
import { size } from './SettingsInputComponent-size.stories';
import { theme } from './SettingsInputComponent-theme.stories';

export const SettingsInputComponent = (args: IconsSettingsInputComponentProps) => (
  <Icon {...args}></Icon>
);

SettingsInputComponent.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SettingsInputComponent.argTypes = {
  display,
  appearance,
  size,
  theme,
};
