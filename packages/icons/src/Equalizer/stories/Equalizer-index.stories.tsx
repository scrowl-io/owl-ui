import * as React from 'react';
import { component as Icon } from '../index';
import { IconsEqualizerProps } from '../Equalizer.types';

import { display } from './Equalizer-display.stories';
import { appearance } from './Equalizer-appearance.stories';
import { size } from './Equalizer-size.stories';
import { theme } from './Equalizer-theme.stories';

export const Equalizer = (args: IconsEqualizerProps) => (
  <Icon {...args}></Icon>
);

Equalizer.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Equalizer.argTypes = {
  display,
  appearance,
  size,
  theme,
};
