import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCameraFrontProps } from '../CameraFront.types';

import { display } from './CameraFront-display.stories';
import { appearance } from './CameraFront-appearance.stories';
import { size } from './CameraFront-size.stories';
import { theme } from './CameraFront-theme.stories';

export const CameraFront = (args: IconsCameraFrontProps) => (
  <Icon {...args}></Icon>
);

CameraFront.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

CameraFront.argTypes = {
  display,
  appearance,
  size,
  theme,
};
