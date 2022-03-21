import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPhotoCameraProps } from '../PhotoCamera.types';

import { display } from './PhotoCamera-display.stories';
import { appearance } from './PhotoCamera-appearance.stories';
import { size } from './PhotoCamera-size.stories';
import { theme } from './PhotoCamera-theme.stories';

export const PhotoCamera = (args: IconsPhotoCameraProps) => (
  <Icon {...args}></Icon>
);

PhotoCamera.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PhotoCamera.argTypes = {
  display,
  appearance,
  size,
  theme,
};
