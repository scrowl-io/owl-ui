import * as React from 'react';
import { component as Icon } from '../index';
import { IconsInboxProps } from '../Inbox.types';

import { display } from './Inbox-display.stories';
import { appearance } from './Inbox-appearance.stories';
import { size } from './Inbox-size.stories';
import { theme } from './Inbox-theme.stories';

export const Inbox = (args: IconsInboxProps) => (
  <Icon {...args}></Icon>
);

Inbox.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Inbox.argTypes = {
  display,
  appearance,
  size,
  theme,
};
