import * as React from 'react';
import { component as Icon } from '../index';
import { IconsScreenLockLandscapeProps } from '../ScreenLockLandscape.types';

import { display } from './ScreenLockLandscape-display.stories';
import { appearance } from './ScreenLockLandscape-appearance.stories';
import { size } from './ScreenLockLandscape-size.stories';
import { theme } from './ScreenLockLandscape-theme.stories';

export const ScreenLockLandscape = (args: IconsScreenLockLandscapeProps) => (
  <Icon {...args}></Icon>
);

ScreenLockLandscape.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ScreenLockLandscape.argTypes = {
  display,
  appearance,
  size,
  theme,
};
