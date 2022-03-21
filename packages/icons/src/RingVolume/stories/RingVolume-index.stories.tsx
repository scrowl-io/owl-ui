import * as React from 'react';
import { component as Icon } from '../index';
import { IconsRingVolumeProps } from '../RingVolume.types';

import { display } from './RingVolume-display.stories';
import { appearance } from './RingVolume-appearance.stories';
import { size } from './RingVolume-size.stories';
import { theme } from './RingVolume-theme.stories';

export const RingVolume = (args: IconsRingVolumeProps) => (
  <Icon {...args}></Icon>
);

RingVolume.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

RingVolume.argTypes = {
  display,
  appearance,
  size,
  theme,
};
