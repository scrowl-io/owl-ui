import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPanoramaFishEyeProps } from '../PanoramaFishEye.types';

import { display } from './PanoramaFishEye-display.stories';
import { appearance } from './PanoramaFishEye-appearance.stories';
import { size } from './PanoramaFishEye-size.stories';
import { theme } from './PanoramaFishEye-theme.stories';

export const PanoramaFishEye = (args: IconsPanoramaFishEyeProps) => (
  <Icon {...args}></Icon>
);

PanoramaFishEye.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PanoramaFishEye.argTypes = {
  display,
  appearance,
  size,
  theme,
};
