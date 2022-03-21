import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLocationOnProps } from '../LocationOn.types';

import { display } from './LocationOn-display.stories';
import { appearance } from './LocationOn-appearance.stories';
import { size } from './LocationOn-size.stories';
import { theme } from './LocationOn-theme.stories';

export const LocationOn = (args: IconsLocationOnProps) => (
  <Icon {...args}></Icon>
);

LocationOn.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

LocationOn.argTypes = {
  display,
  appearance,
  size,
  theme,
};
