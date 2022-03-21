import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAccessTimeProps } from '../AccessTime.types';

import { display } from './AccessTime-display.stories';
import { appearance } from './AccessTime-appearance.stories';
import { size } from './AccessTime-size.stories';
import { theme } from './AccessTime-theme.stories';

export const AccessTime = (args: IconsAccessTimeProps) => (
  <Icon {...args}></Icon>
);

AccessTime.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

AccessTime.argTypes = {
  display,
  appearance,
  size,
  theme,
};
