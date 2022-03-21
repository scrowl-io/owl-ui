import * as React from 'react';
import { component as Icon } from '../index';
import { IconsExposureProps } from '../Exposure.types';

import { display } from './Exposure-display.stories';
import { appearance } from './Exposure-appearance.stories';
import { size } from './Exposure-size.stories';
import { theme } from './Exposure-theme.stories';

export const Exposure = (args: IconsExposureProps) => (
  <Icon {...args}></Icon>
);

Exposure.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Exposure.argTypes = {
  display,
  appearance,
  size,
  theme,
};
