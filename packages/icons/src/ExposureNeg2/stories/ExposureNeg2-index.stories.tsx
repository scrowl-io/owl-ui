import * as React from 'react';
import { component as Icon } from '../index';
import { IconsExposureNeg2Props } from '../ExposureNeg2.types';

import { display } from './ExposureNeg2-display.stories';
import { appearance } from './ExposureNeg2-appearance.stories';
import { size } from './ExposureNeg2-size.stories';
import { theme } from './ExposureNeg2-theme.stories';

export const ExposureNeg2 = (args: IconsExposureNeg2Props) => (
  <Icon {...args}></Icon>
);

ExposureNeg2.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ExposureNeg2.argTypes = {
  display,
  appearance,
  size,
  theme,
};
