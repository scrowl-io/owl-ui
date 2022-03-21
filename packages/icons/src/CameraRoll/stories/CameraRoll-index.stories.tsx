import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCameraRollProps } from '../CameraRoll.types';

import { display } from './CameraRoll-display.stories';
import { appearance } from './CameraRoll-appearance.stories';
import { size } from './CameraRoll-size.stories';
import { theme } from './CameraRoll-theme.stories';

export const CameraRoll = (args: IconsCameraRollProps) => (
  <Icon {...args}></Icon>
);

CameraRoll.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

CameraRoll.argTypes = {
  display,
  appearance,
  size,
  theme,
};
