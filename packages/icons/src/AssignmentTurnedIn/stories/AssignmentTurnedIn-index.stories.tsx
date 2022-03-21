import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAssignmentTurnedInProps } from '../AssignmentTurnedIn.types';

import { display } from './AssignmentTurnedIn-display.stories';
import { appearance } from './AssignmentTurnedIn-appearance.stories';
import { size } from './AssignmentTurnedIn-size.stories';
import { theme } from './AssignmentTurnedIn-theme.stories';

export const AssignmentTurnedIn = (args: IconsAssignmentTurnedInProps) => (
  <Icon {...args}></Icon>
);

AssignmentTurnedIn.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

AssignmentTurnedIn.argTypes = {
  display,
  appearance,
  size,
  theme,
};
