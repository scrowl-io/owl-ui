import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCameraProps } from '../Camera.types';

import { display } from './Camera-display.stories';
import { appearance } from './Camera-appearance.stories';
import { size } from './Camera-size.stories';
import { theme } from './Camera-theme.stories';

export const Camera = (args: IconsCameraProps) => (
  <Icon {...args}></Icon>
);

Camera.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Camera.argTypes = {
  display,
  appearance,
  size,
  theme,
};
