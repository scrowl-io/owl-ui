import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFitnessCenterProps } from '../FitnessCenter.types';

import { display } from './FitnessCenter-display.stories';
import { appearance } from './FitnessCenter-appearance.stories';
import { size } from './FitnessCenter-size.stories';
import { theme } from './FitnessCenter-theme.stories';

export const FitnessCenter = (args: IconsFitnessCenterProps) => (
  <Icon {...args}></Icon>
);

FitnessCenter.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FitnessCenter.argTypes = {
  display,
  appearance,
  size,
  theme,
};
