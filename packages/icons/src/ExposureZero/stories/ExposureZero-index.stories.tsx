import * as React from 'react';
import { component as Icon } from '../index';
import { IconsExposureZeroProps } from '../ExposureZero.types';

import { display } from './ExposureZero-display.stories';
import { appearance } from './ExposureZero-appearance.stories';
import { size } from './ExposureZero-size.stories';
import { theme } from './ExposureZero-theme.stories';

export const ExposureZero = (args: IconsExposureZeroProps) => (
  <Icon {...args}></Icon>
);

ExposureZero.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ExposureZero.argTypes = {
  display,
  appearance,
  size,
  theme,
};
