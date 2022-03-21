import * as React from 'react';
import { component as Icon } from '../index';
import { IconsExposureNeg1Props } from '../ExposureNeg1.types';

import { display } from './ExposureNeg1-display.stories';
import { appearance } from './ExposureNeg1-appearance.stories';
import { size } from './ExposureNeg1-size.stories';
import { theme } from './ExposureNeg1-theme.stories';

export const ExposureNeg1 = (args: IconsExposureNeg1Props) => (
  <Icon {...args}></Icon>
);

ExposureNeg1.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ExposureNeg1.argTypes = {
  display,
  appearance,
  size,
  theme,
};
