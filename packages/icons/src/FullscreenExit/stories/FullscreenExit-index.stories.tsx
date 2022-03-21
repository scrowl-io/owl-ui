import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFullscreenExitProps } from '../FullscreenExit.types';

import { display } from './FullscreenExit-display.stories';
import { appearance } from './FullscreenExit-appearance.stories';
import { size } from './FullscreenExit-size.stories';
import { theme } from './FullscreenExit-theme.stories';

export const FullscreenExit = (args: IconsFullscreenExitProps) => (
  <Icon {...args}></Icon>
);

FullscreenExit.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FullscreenExit.argTypes = {
  display,
  appearance,
  size,
  theme,
};
