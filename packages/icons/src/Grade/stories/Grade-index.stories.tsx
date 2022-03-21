import * as React from 'react';
import { component as Icon } from '../index';
import { IconsGradeProps } from '../Grade.types';

import { display } from './Grade-display.stories';
import { appearance } from './Grade-appearance.stories';
import { size } from './Grade-size.stories';
import { theme } from './Grade-theme.stories';

export const Grade = (args: IconsGradeProps) => (
  <Icon {...args}></Icon>
);

Grade.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Grade.argTypes = {
  display,
  appearance,
  size,
  theme,
};
