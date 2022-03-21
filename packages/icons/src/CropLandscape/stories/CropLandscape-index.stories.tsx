import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCropLandscapeProps } from '../CropLandscape.types';

import { display } from './CropLandscape-display.stories';
import { appearance } from './CropLandscape-appearance.stories';
import { size } from './CropLandscape-size.stories';
import { theme } from './CropLandscape-theme.stories';

export const CropLandscape = (args: IconsCropLandscapeProps) => (
  <Icon {...args}></Icon>
);

CropLandscape.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

CropLandscape.argTypes = {
  display,
  appearance,
  size,
  theme,
};
