import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCropSquareProps } from '../CropSquare.types';

import { display } from './CropSquare-display.stories';
import { appearance } from './CropSquare-appearance.stories';
import { size } from './CropSquare-size.stories';
import { theme } from './CropSquare-theme.stories';

export const CropSquare = (args: IconsCropSquareProps) => (
  <Icon {...args}></Icon>
);

CropSquare.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

CropSquare.argTypes = {
  display,
  appearance,
  size,
  theme,
};
