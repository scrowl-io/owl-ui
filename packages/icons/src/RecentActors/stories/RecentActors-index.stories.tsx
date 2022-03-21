import * as React from 'react';
import { component as Icon } from '../index';
import { IconsRecentActorsProps } from '../RecentActors.types';

import { display } from './RecentActors-display.stories';
import { appearance } from './RecentActors-appearance.stories';
import { size } from './RecentActors-size.stories';
import { theme } from './RecentActors-theme.stories';

export const RecentActors = (args: IconsRecentActorsProps) => (
  <Icon {...args}></Icon>
);

RecentActors.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

RecentActors.argTypes = {
  display,
  appearance,
  size,
  theme,
};
