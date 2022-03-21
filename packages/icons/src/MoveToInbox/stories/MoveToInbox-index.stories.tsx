import * as React from 'react';
import { component as Icon } from '../index';
import { IconsMoveToInboxProps } from '../MoveToInbox.types';

import { display } from './MoveToInbox-display.stories';
import { appearance } from './MoveToInbox-appearance.stories';
import { size } from './MoveToInbox-size.stories';
import { theme } from './MoveToInbox-theme.stories';

export const MoveToInbox = (args: IconsMoveToInboxProps) => (
  <Icon {...args}></Icon>
);

MoveToInbox.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

MoveToInbox.argTypes = {
  display,
  appearance,
  size,
  theme,
};
