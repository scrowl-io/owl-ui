import * as React from 'react';
import { component as Icon } from '../index';
import { IconsVideocamProps } from '../Videocam.types';

import { display } from './Videocam-display.stories';
import { appearance } from './Videocam-appearance.stories';
import { size } from './Videocam-size.stories';
import { theme } from './Videocam-theme.stories';

export const Videocam = (args: IconsVideocamProps) => (
  <Icon {...args}></Icon>
);

Videocam.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Videocam.argTypes = {
  display,
  appearance,
  size,
  theme,
};
