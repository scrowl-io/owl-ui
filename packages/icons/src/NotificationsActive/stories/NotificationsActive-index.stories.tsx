import * as React from 'react';
import { component as Icon } from '../index';
import { IconsNotificationsActiveProps } from '../NotificationsActive.types';

import { display } from './NotificationsActive-display.stories';
import { appearance } from './NotificationsActive-appearance.stories';
import { size } from './NotificationsActive-size.stories';
import { theme } from './NotificationsActive-theme.stories';

export const NotificationsActive = (args: IconsNotificationsActiveProps) => (
  <Icon {...args}></Icon>
);

NotificationsActive.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

NotificationsActive.argTypes = {
  display,
  appearance,
  size,
  theme,
};
