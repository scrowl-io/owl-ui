import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCameraEnhanceProps } from '../CameraEnhance.types';

import { display } from './CameraEnhance-display.stories';
import { appearance } from './CameraEnhance-appearance.stories';
import { size } from './CameraEnhance-size.stories';
import { theme } from './CameraEnhance-theme.stories';

export const CameraEnhance = (args: IconsCameraEnhanceProps) => (
  <Icon {...args}></Icon>
);

CameraEnhance.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

CameraEnhance.argTypes = {
  display,
  appearance,
  size,
  theme,
};
