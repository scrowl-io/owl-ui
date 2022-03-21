import * as React from 'react';
import { component as Icon } from '../index';
import { IconsStopScreenShareProps } from '../StopScreenShare.types';

import { display } from './StopScreenShare-display.stories';
import { appearance } from './StopScreenShare-appearance.stories';
import { size } from './StopScreenShare-size.stories';
import { theme } from './StopScreenShare-theme.stories';

export const StopScreenShare = (args: IconsStopScreenShareProps) => (
  <Icon {...args}></Icon>
);

StopScreenShare.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

StopScreenShare.argTypes = {
  display,
  appearance,
  size,
  theme,
};
