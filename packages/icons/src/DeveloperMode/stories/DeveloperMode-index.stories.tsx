import * as React from 'react';
import { component as Icon } from '../index';
import { IconsDeveloperModeProps } from '../DeveloperMode.types';

import { display } from './DeveloperMode-display.stories';
import { appearance } from './DeveloperMode-appearance.stories';
import { size } from './DeveloperMode-size.stories';
import { theme } from './DeveloperMode-theme.stories';

export const DeveloperMode = (args: IconsDeveloperModeProps) => (
  <Icon {...args}></Icon>
);

DeveloperMode.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

DeveloperMode.argTypes = {
  display,
  appearance,
  size,
  theme,
};
