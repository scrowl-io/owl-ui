import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLaunchProps } from '../Launch.types';

import { display } from './Launch-display.stories';
import { appearance } from './Launch-appearance.stories';
import { size } from './Launch-size.stories';
import { theme } from './Launch-theme.stories';

export const Launch = (args: IconsLaunchProps) => (
  <Icon {...args}></Icon>
);

Launch.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Launch.argTypes = {
  display,
  appearance,
  size,
  theme,
};
