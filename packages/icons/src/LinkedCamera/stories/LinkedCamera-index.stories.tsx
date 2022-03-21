import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLinkedCameraProps } from '../LinkedCamera.types';

import { display } from './LinkedCamera-display.stories';
import { appearance } from './LinkedCamera-appearance.stories';
import { size } from './LinkedCamera-size.stories';
import { theme } from './LinkedCamera-theme.stories';

export const LinkedCamera = (args: IconsLinkedCameraProps) => (
  <Icon {...args}></Icon>
);

LinkedCamera.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

LinkedCamera.argTypes = {
  display,
  appearance,
  size,
  theme,
};
