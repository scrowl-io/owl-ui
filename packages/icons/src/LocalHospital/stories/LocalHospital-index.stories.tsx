import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLocalHospitalProps } from '../LocalHospital.types';

import { display } from './LocalHospital-display.stories';
import { appearance } from './LocalHospital-appearance.stories';
import { size } from './LocalHospital-size.stories';
import { theme } from './LocalHospital-theme.stories';

export const LocalHospital = (args: IconsLocalHospitalProps) => (
  <Icon {...args}></Icon>
);

LocalHospital.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

LocalHospital.argTypes = {
  display,
  appearance,
  size,
  theme,
};
