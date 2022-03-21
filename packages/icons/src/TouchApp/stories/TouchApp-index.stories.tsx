import * as React from 'react';
import { component as Icon } from '../index';
import { IconsTouchAppProps } from '../TouchApp.types';

import { display } from './TouchApp-display.stories';
import { appearance } from './TouchApp-appearance.stories';
import { size } from './TouchApp-size.stories';
import { theme } from './TouchApp-theme.stories';

export const TouchApp = (args: IconsTouchAppProps) => (
  <Icon {...args}></Icon>
);

TouchApp.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

TouchApp.argTypes = {
  display,
  appearance,
  size,
  theme,
};
