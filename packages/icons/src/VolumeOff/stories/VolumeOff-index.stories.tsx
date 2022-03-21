import * as React from 'react';
import { component as Icon } from '../index';
import { IconsVolumeOffProps } from '../VolumeOff.types';

import { display } from './VolumeOff-display.stories';
import { appearance } from './VolumeOff-appearance.stories';
import { size } from './VolumeOff-size.stories';
import { theme } from './VolumeOff-theme.stories';

export const VolumeOff = (args: IconsVolumeOffProps) => (
  <Icon {...args}></Icon>
);

VolumeOff.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

VolumeOff.argTypes = {
  display,
  appearance,
  size,
  theme,
};
