import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAssignmentIndProps } from '../AssignmentInd.types';

import { display } from './AssignmentInd-display.stories';
import { appearance } from './AssignmentInd-appearance.stories';
import { size } from './AssignmentInd-size.stories';
import { theme } from './AssignmentInd-theme.stories';

export const AssignmentInd = (args: IconsAssignmentIndProps) => (
  <Icon {...args}></Icon>
);

AssignmentInd.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

AssignmentInd.argTypes = {
  display,
  appearance,
  size,
  theme,
};
