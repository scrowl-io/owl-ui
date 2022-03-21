import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAssignmentReturnedProps } from '../AssignmentReturned.types';

import { display } from './AssignmentReturned-display.stories';
import { appearance } from './AssignmentReturned-appearance.stories';
import { size } from './AssignmentReturned-size.stories';
import { theme } from './AssignmentReturned-theme.stories';

export const AssignmentReturned = (args: IconsAssignmentReturnedProps) => (
  <Icon {...args}></Icon>
);

AssignmentReturned.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

AssignmentReturned.argTypes = {
  display,
  appearance,
  size,
  theme,
};
