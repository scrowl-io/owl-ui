import * as React from 'react';
import { component as Icon } from '../index';
import { IconsHdrOffProps } from '../HdrOff.types';

import { display } from './HdrOff-display.stories';
import { appearance } from './HdrOff-appearance.stories';
import { size } from './HdrOff-size.stories';
import { theme } from './HdrOff-theme.stories';

export const HdrOff = (args: IconsHdrOffProps) => (
  <Icon {...args}></Icon>
);

HdrOff.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

HdrOff.argTypes = {
  display,
  appearance,
  size,
  theme,
};
