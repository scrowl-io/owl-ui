import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFullscreenProps } from '../Fullscreen.types';

import { display } from './Fullscreen-display.stories';
import { appearance } from './Fullscreen-appearance.stories';
import { size } from './Fullscreen-size.stories';
import { theme } from './Fullscreen-theme.stories';

export const Fullscreen = (args: IconsFullscreenProps) => (
  <Icon {...args}></Icon>
);

Fullscreen.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Fullscreen.argTypes = {
  display,
  appearance,
  size,
  theme,
};
