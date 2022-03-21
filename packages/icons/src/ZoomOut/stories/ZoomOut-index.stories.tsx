import * as React from 'react';
import { component as Icon } from '../index';
import { IconsZoomOutProps } from '../ZoomOut.types';

import { display } from './ZoomOut-display.stories';
import { appearance } from './ZoomOut-appearance.stories';
import { size } from './ZoomOut-size.stories';
import { theme } from './ZoomOut-theme.stories';

export const ZoomOut = (args: IconsZoomOutProps) => (
  <Icon {...args}></Icon>
);

ZoomOut.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ZoomOut.argTypes = {
  display,
  appearance,
  size,
  theme,
};
