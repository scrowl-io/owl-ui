import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAnnouncementProps } from '../Announcement.types';

import { display } from './Announcement-display.stories';
import { appearance } from './Announcement-appearance.stories';
import { size } from './Announcement-size.stories';
import { theme } from './Announcement-theme.stories';

export const Announcement = (args: IconsAnnouncementProps) => (
  <Icon {...args}></Icon>
);

Announcement.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Announcement.argTypes = {
  display,
  appearance,
  size,
  theme,
};
