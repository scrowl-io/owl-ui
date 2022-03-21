import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSettingsRemoteProps } from '../SettingsRemote.types';

import { display } from './SettingsRemote-display.stories';
import { appearance } from './SettingsRemote-appearance.stories';
import { size } from './SettingsRemote-size.stories';
import { theme } from './SettingsRemote-theme.stories';

export const SettingsRemote = (args: IconsSettingsRemoteProps) => (
  <Icon {...args}></Icon>
);

SettingsRemote.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SettingsRemote.argTypes = {
  display,
  appearance,
  size,
  theme,
};
