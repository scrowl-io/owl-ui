import * as React from 'react';
import { component as Icon } from '../index';
import { IconsBeachAccessProps } from '../BeachAccess.types';

import { display } from './BeachAccess-display.stories';
import { appearance } from './BeachAccess-appearance.stories';
import { size } from './BeachAccess-size.stories';
import { theme } from './BeachAccess-theme.stories';

export const BeachAccess = (args: IconsBeachAccessProps) => (
  <Icon {...args}></Icon>
);

BeachAccess.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

BeachAccess.argTypes = {
  display,
  appearance,
  size,
  theme,
};
