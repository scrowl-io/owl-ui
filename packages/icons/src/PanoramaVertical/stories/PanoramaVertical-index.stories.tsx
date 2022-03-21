import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPanoramaVerticalProps } from '../PanoramaVertical.types';

import { display } from './PanoramaVertical-display.stories';
import { appearance } from './PanoramaVertical-appearance.stories';
import { size } from './PanoramaVertical-size.stories';
import { theme } from './PanoramaVertical-theme.stories';

export const PanoramaVertical = (args: IconsPanoramaVerticalProps) => (
  <Icon {...args}></Icon>
);

PanoramaVertical.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PanoramaVertical.argTypes = {
  display,
  appearance,
  size,
  theme,
};
