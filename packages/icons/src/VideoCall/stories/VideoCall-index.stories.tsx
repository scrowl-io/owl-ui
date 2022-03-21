import * as React from 'react';
import { component as Icon } from '../index';
import { IconsVideoCallProps } from '../VideoCall.types';

import { display } from './VideoCall-display.stories';
import { appearance } from './VideoCall-appearance.stories';
import { size } from './VideoCall-size.stories';
import { theme } from './VideoCall-theme.stories';

export const VideoCall = (args: IconsVideoCallProps) => (
  <Icon {...args}></Icon>
);

VideoCall.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

VideoCall.argTypes = {
  display,
  appearance,
  size,
  theme,
};
