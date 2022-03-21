import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAudiotrackProps } from '../Audiotrack.types';

import { display } from './Audiotrack-display.stories';
import { appearance } from './Audiotrack-appearance.stories';
import { size } from './Audiotrack-size.stories';
import { theme } from './Audiotrack-theme.stories';

export const Audiotrack = (args: IconsAudiotrackProps) => (
  <Icon {...args}></Icon>
);

Audiotrack.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Audiotrack.argTypes = {
  display,
  appearance,
  size,
  theme,
};
