import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCastConnectedProps } from '../CastConnected.types';

import { display } from './CastConnected-display.stories';
import { appearance } from './CastConnected-appearance.stories';
import { size } from './CastConnected-size.stories';
import { theme } from './CastConnected-theme.stories';

export const CastConnected = (args: IconsCastConnectedProps) => (
  <Icon {...args}></Icon>
);

CastConnected.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

CastConnected.argTypes = {
  display,
  appearance,
  size,
  theme,
};
