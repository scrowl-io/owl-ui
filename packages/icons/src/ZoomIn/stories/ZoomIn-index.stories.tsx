import * as React from 'react';
import { component as Icon } from '../index';
import { IconsZoomInProps } from '../ZoomIn.types';

import { display } from './ZoomIn-display.stories';
import { appearance } from './ZoomIn-appearance.stories';
import { size } from './ZoomIn-size.stories';
import { theme } from './ZoomIn-theme.stories';

export const ZoomIn = (args: IconsZoomInProps) => (
  <Icon {...args}></Icon>
);

ZoomIn.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ZoomIn.argTypes = {
  display,
  appearance,
  size,
  theme,
};
