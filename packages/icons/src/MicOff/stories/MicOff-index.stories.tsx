import * as React from 'react';
import { component as Icon } from '../index';
import { IconsMicOffProps } from '../MicOff.types';

import { display } from './MicOff-display.stories';
import { appearance } from './MicOff-appearance.stories';
import { size } from './MicOff-size.stories';
import { theme } from './MicOff-theme.stories';

export const MicOff = (args: IconsMicOffProps) => (
  <Icon {...args}></Icon>
);

MicOff.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

MicOff.argTypes = {
  display,
  appearance,
  size,
  theme,
};
