import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLocalAtmProps } from '../LocalAtm.types';

import { display } from './LocalAtm-display.stories';
import { appearance } from './LocalAtm-appearance.stories';
import { size } from './LocalAtm-size.stories';
import { theme } from './LocalAtm-theme.stories';

export const LocalAtm = (args: IconsLocalAtmProps) => (
  <Icon {...args}></Icon>
);

LocalAtm.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

LocalAtm.argTypes = {
  display,
  appearance,
  size,
  theme,
};
