import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSettingsVoiceProps } from '../SettingsVoice.types';

import { display } from './SettingsVoice-display.stories';
import { appearance } from './SettingsVoice-appearance.stories';
import { size } from './SettingsVoice-size.stories';
import { theme } from './SettingsVoice-theme.stories';

export const SettingsVoice = (args: IconsSettingsVoiceProps) => (
  <Icon {...args}></Icon>
);

SettingsVoice.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SettingsVoice.argTypes = {
  display,
  appearance,
  size,
  theme,
};
