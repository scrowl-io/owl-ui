import * as React from 'react';
import { component as Icon } from '../index';
import { IconsNotificationsPausedProps } from '../NotificationsPaused.types';

import { display } from './NotificationsPaused-display.stories';
import { appearance } from './NotificationsPaused-appearance.stories';
import { size } from './NotificationsPaused-size.stories';
import { theme } from './NotificationsPaused-theme.stories';

export const NotificationsPaused = (args: IconsNotificationsPausedProps) => (
  <Icon {...args}></Icon>
);

NotificationsPaused.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

NotificationsPaused.argTypes = {
  display,
  appearance,
  size,
  theme,
};
