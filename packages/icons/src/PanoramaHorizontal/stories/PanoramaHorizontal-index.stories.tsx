import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPanoramaHorizontalProps } from '../PanoramaHorizontal.types';

import { display } from './PanoramaHorizontal-display.stories';
import { appearance } from './PanoramaHorizontal-appearance.stories';
import { size } from './PanoramaHorizontal-size.stories';
import { theme } from './PanoramaHorizontal-theme.stories';

export const PanoramaHorizontal = (args: IconsPanoramaHorizontalProps) => (
  <Icon {...args}></Icon>
);

PanoramaHorizontal.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PanoramaHorizontal.argTypes = {
  display,
  appearance,
  size,
  theme,
};
