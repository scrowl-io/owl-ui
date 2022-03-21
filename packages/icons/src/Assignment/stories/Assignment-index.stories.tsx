import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAssignmentProps } from '../Assignment.types';

import { display } from './Assignment-display.stories';
import { appearance } from './Assignment-appearance.stories';
import { size } from './Assignment-size.stories';
import { theme } from './Assignment-theme.stories';

export const Assignment = (args: IconsAssignmentProps) => (
  <Icon {...args}></Icon>
);

Assignment.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Assignment.argTypes = {
  display,
  appearance,
  size,
  theme,
};
