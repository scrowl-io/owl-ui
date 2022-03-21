import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSettingsInputSvideoProps } from '../SettingsInputSvideo.types';

import { display } from './SettingsInputSvideo-display.stories';
import { appearance } from './SettingsInputSvideo-appearance.stories';
import { size } from './SettingsInputSvideo-size.stories';
import { theme } from './SettingsInputSvideo-theme.stories';

export const SettingsInputSvideo = (args: IconsSettingsInputSvideoProps) => (
  <Icon {...args}></Icon>
);

SettingsInputSvideo.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SettingsInputSvideo.argTypes = {
  display,
  appearance,
  size,
  theme,
};
