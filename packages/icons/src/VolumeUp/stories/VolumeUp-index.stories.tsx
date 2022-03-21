import * as React from 'react';
import { component as Icon } from '../index';
import { IconsVolumeUpProps } from '../VolumeUp.types';

import { display } from './VolumeUp-display.stories';
import { appearance } from './VolumeUp-appearance.stories';
import { size } from './VolumeUp-size.stories';
import { theme } from './VolumeUp-theme.stories';

export const VolumeUp = (args: IconsVolumeUpProps) => (
  <Icon {...args}></Icon>
);

VolumeUp.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

VolumeUp.argTypes = {
  display,
  appearance,
  size,
  theme,
};
