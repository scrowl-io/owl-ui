import * as React from 'react';
import { component as Icon } from '../index';
import { IconsVolumeDownProps } from '../VolumeDown.types';

import { display } from './VolumeDown-display.stories';
import { appearance } from './VolumeDown-appearance.stories';
import { size } from './VolumeDown-size.stories';
import { theme } from './VolumeDown-theme.stories';

export const VolumeDown = (args: IconsVolumeDownProps) => (
  <Icon {...args}></Icon>
);

VolumeDown.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

VolumeDown.argTypes = {
  display,
  appearance,
  size,
  theme,
};
