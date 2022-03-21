import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAssignmentLateProps } from '../AssignmentLate.types';

import { display } from './AssignmentLate-display.stories';
import { appearance } from './AssignmentLate-appearance.stories';
import { size } from './AssignmentLate-size.stories';
import { theme } from './AssignmentLate-theme.stories';

export const AssignmentLate = (args: IconsAssignmentLateProps) => (
  <Icon {...args}></Icon>
);

AssignmentLate.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

AssignmentLate.argTypes = {
  display,
  appearance,
  size,
  theme,
};
