import * as React from 'react';
import { component as Icon } from '../index';
import { IconsScreenShareProps } from '../ScreenShare.types';

import { display } from './ScreenShare-display.stories';
import { appearance } from './ScreenShare-appearance.stories';
import { size } from './ScreenShare-size.stories';
import { theme } from './ScreenShare-theme.stories';

export const ScreenShare = (args: IconsScreenShareProps) => (
  <Icon {...args}></Icon>
);

ScreenShare.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ScreenShare.argTypes = {
  display,
  appearance,
  size,
  theme,
};
