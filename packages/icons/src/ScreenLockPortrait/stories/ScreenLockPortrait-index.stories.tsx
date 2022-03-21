import * as React from 'react';
import { component as Icon } from '../index';
import { IconsScreenLockPortraitProps } from '../ScreenLockPortrait.types';

import { display } from './ScreenLockPortrait-display.stories';
import { appearance } from './ScreenLockPortrait-appearance.stories';
import { size } from './ScreenLockPortrait-size.stories';
import { theme } from './ScreenLockPortrait-theme.stories';

export const ScreenLockPortrait = (args: IconsScreenLockPortraitProps) => (
  <Icon {...args}></Icon>
);

ScreenLockPortrait.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ScreenLockPortrait.argTypes = {
  display,
  appearance,
  size,
  theme,
};
