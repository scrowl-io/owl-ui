import * as React from 'react';
import { component as Icon } from '../index';
import { IconsInsertInvitationProps } from '../InsertInvitation.types';

import { display } from './InsertInvitation-display.stories';
import { appearance } from './InsertInvitation-appearance.stories';
import { size } from './InsertInvitation-size.stories';
import { theme } from './InsertInvitation-theme.stories';

export const InsertInvitation = (args: IconsInsertInvitationProps) => (
  <Icon {...args}></Icon>
);

InsertInvitation.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

InsertInvitation.argTypes = {
  display,
  appearance,
  size,
  theme,
};
