import * as React from 'react';
import { component as Icon } from '../index';
import { IconsZoomOutMapProps } from '../ZoomOutMap.types';

import { display } from './ZoomOutMap-display.stories';
import { appearance } from './ZoomOutMap-appearance.stories';
import { size } from './ZoomOutMap-size.stories';
import { theme } from './ZoomOutMap-theme.stories';

export const ZoomOutMap = (args: IconsZoomOutMapProps) => (
  <Icon {...args}></Icon>
);

ZoomOutMap.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ZoomOutMap.argTypes = {
  display,
  appearance,
  size,
  theme,
};
