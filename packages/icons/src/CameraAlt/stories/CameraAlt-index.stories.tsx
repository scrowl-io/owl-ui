import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCameraAltProps } from '../CameraAlt.types';

import { display } from './CameraAlt-display.stories';
import { appearance } from './CameraAlt-appearance.stories';
import { size } from './CameraAlt-size.stories';
import { theme } from './CameraAlt-theme.stories';

export const CameraAlt = (args: IconsCameraAltProps) => (
  <Icon {...args}></Icon>
);

CameraAlt.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

CameraAlt.argTypes = {
  display,
  appearance,
  size,
  theme,
};
