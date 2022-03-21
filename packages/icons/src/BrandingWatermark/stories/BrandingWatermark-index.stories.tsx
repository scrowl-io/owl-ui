import * as React from 'react';
import { component as Icon } from '../index';
import { IconsBrandingWatermarkProps } from '../BrandingWatermark.types';

import { display } from './BrandingWatermark-display.stories';
import { appearance } from './BrandingWatermark-appearance.stories';
import { size } from './BrandingWatermark-size.stories';
import { theme } from './BrandingWatermark-theme.stories';

export const BrandingWatermark = (args: IconsBrandingWatermarkProps) => (
  <Icon {...args}></Icon>
);

BrandingWatermark.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

BrandingWatermark.argTypes = {
  display,
  appearance,
  size,
  theme,
};
