import * as React from 'react';
import { component as Icon } from '../index';
import { IconsNotificationsOffProps } from '../NotificationsOff.types';

import { display } from './NotificationsOff-display.stories';
import { appearance } from './NotificationsOff-appearance.stories';
import { size } from './NotificationsOff-size.stories';
import { theme } from './NotificationsOff-theme.stories';

export const NotificationsOff = (args: IconsNotificationsOffProps) => (
  <Icon {...args}></Icon>
);

NotificationsOff.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

NotificationsOff.argTypes = {
  display,
  appearance,
  size,
  theme,
};
