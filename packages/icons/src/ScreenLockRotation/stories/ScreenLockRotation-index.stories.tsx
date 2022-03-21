import * as React from 'react';
import { component as Icon } from '../index';
import { IconsScreenLockRotationProps } from '../ScreenLockRotation.types';

import { display } from './ScreenLockRotation-display.stories';
import { appearance } from './ScreenLockRotation-appearance.stories';
import { size } from './ScreenLockRotation-size.stories';
import { theme } from './ScreenLockRotation-theme.stories';

export const ScreenLockRotation = (args: IconsScreenLockRotationProps) => (
  <Icon {...args}></Icon>
);

ScreenLockRotation.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ScreenLockRotation.argTypes = {
  display,
  appearance,
  size,
  theme,
};
