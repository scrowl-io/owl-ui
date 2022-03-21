import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLocalFloristProps } from '../LocalFlorist.types';

import { display } from './LocalFlorist-display.stories';
import { appearance } from './LocalFlorist-appearance.stories';
import { size } from './LocalFlorist-size.stories';
import { theme } from './LocalFlorist-theme.stories';

export const LocalFlorist = (args: IconsLocalFloristProps) => (
  <Icon {...args}></Icon>
);

LocalFlorist.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

LocalFlorist.argTypes = {
  display,
  appearance,
  size,
  theme,
};
