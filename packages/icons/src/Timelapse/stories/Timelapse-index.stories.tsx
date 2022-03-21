import * as React from 'react';
import { component as Icon } from '../index';
import { IconsTimelapseProps } from '../Timelapse.types';

import { display } from './Timelapse-display.stories';
import { appearance } from './Timelapse-appearance.stories';
import { size } from './Timelapse-size.stories';
import { theme } from './Timelapse-theme.stories';

export const Timelapse = (args: IconsTimelapseProps) => (
  <Icon {...args}></Icon>
);

Timelapse.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Timelapse.argTypes = {
  display,
  appearance,
  size,
  theme,
};
