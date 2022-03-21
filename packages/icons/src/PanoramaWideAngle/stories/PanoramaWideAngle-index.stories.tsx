import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPanoramaWideAngleProps } from '../PanoramaWideAngle.types';

import { display } from './PanoramaWideAngle-display.stories';
import { appearance } from './PanoramaWideAngle-appearance.stories';
import { size } from './PanoramaWideAngle-size.stories';
import { theme } from './PanoramaWideAngle-theme.stories';

export const PanoramaWideAngle = (args: IconsPanoramaWideAngleProps) => (
  <Icon {...args}></Icon>
);

PanoramaWideAngle.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PanoramaWideAngle.argTypes = {
  display,
  appearance,
  size,
  theme,
};
