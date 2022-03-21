import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAppsProps } from '../Apps.types';

import { display } from './Apps-display.stories';
import { appearance } from './Apps-appearance.stories';
import { size } from './Apps-size.stories';
import { theme } from './Apps-theme.stories';

export const Apps = (args: IconsAppsProps) => (
  <Icon {...args}></Icon>
);

Apps.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Apps.argTypes = {
  display,
  appearance,
  size,
  theme,
};
