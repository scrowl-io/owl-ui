import * as React from 'react';
import { component as Icon } from '../index';
import { IconsNotificationsProps } from '../Notifications.types';

import { display } from './Notifications-display.stories';
import { appearance } from './Notifications-appearance.stories';
import { size } from './Notifications-size.stories';
import { theme } from './Notifications-theme.stories';

export const Notifications = (args: IconsNotificationsProps) => (
  <Icon {...args}></Icon>
);

Notifications.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Notifications.argTypes = {
  display,
  appearance,
  size,
  theme,
};
