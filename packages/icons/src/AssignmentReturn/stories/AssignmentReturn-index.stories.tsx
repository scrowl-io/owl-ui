import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAssignmentReturnProps } from '../AssignmentReturn.types';

import { display } from './AssignmentReturn-display.stories';
import { appearance } from './AssignmentReturn-appearance.stories';
import { size } from './AssignmentReturn-size.stories';
import { theme } from './AssignmentReturn-theme.stories';

export const AssignmentReturn = (args: IconsAssignmentReturnProps) => (
  <Icon {...args}></Icon>
);

AssignmentReturn.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

AssignmentReturn.argTypes = {
  display,
  appearance,
  size,
  theme,
};
