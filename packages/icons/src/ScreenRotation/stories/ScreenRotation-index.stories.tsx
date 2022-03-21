import * as React from 'react';
import { component as Icon } from '../index';
import { IconsScreenRotationProps } from '../ScreenRotation.types';

import { display } from './ScreenRotation-display.stories';
import { appearance } from './ScreenRotation-appearance.stories';
import { size } from './ScreenRotation-size.stories';
import { theme } from './ScreenRotation-theme.stories';

export const ScreenRotation = (args: IconsScreenRotationProps) => (
  <Icon {...args}></Icon>
);

ScreenRotation.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ScreenRotation.argTypes = {
  display,
  appearance,
  size,
  theme,
};
