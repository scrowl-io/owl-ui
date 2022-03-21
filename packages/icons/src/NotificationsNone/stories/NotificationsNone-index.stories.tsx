import * as React from 'react';
import { component as Icon } from '../index';
import { IconsNotificationsNoneProps } from '../NotificationsNone.types';

import { display } from './NotificationsNone-display.stories';
import { appearance } from './NotificationsNone-appearance.stories';
import { size } from './NotificationsNone-size.stories';
import { theme } from './NotificationsNone-theme.stories';

export const NotificationsNone = (args: IconsNotificationsNoneProps) => (
  <Icon {...args}></Icon>
);

NotificationsNone.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

NotificationsNone.argTypes = {
  display,
  appearance,
  size,
  theme,
};
