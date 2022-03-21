import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCameraRearProps } from '../CameraRear.types';

import { display } from './CameraRear-display.stories';
import { appearance } from './CameraRear-appearance.stories';
import { size } from './CameraRear-size.stories';
import { theme } from './CameraRear-theme.stories';

export const CameraRear = (args: IconsCameraRearProps) => (
  <Icon {...args}></Icon>
);

CameraRear.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

CameraRear.argTypes = {
  display,
  appearance,
  size,
  theme,
};
