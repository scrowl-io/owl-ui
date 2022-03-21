import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSchoolProps } from '../School.types';

import { display } from './School-display.stories';
import { appearance } from './School-appearance.stories';
import { size } from './School-size.stories';
import { theme } from './School-theme.stories';

export const School = (args: IconsSchoolProps) => (
  <Icon {...args}></Icon>
);

School.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

School.argTypes = {
  display,
  appearance,
  size,
  theme,
};
