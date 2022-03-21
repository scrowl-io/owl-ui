import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCropDinProps } from '../CropDin.types';

import { display } from './CropDin-display.stories';
import { appearance } from './CropDin-appearance.stories';
import { size } from './CropDin-size.stories';
import { theme } from './CropDin-theme.stories';

export const CropDin = (args: IconsCropDinProps) => (
  <Icon {...args}></Icon>
);

CropDin.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

CropDin.argTypes = {
  display,
  appearance,
  size,
  theme,
};
