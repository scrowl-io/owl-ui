import * as React from 'react';
import { component as Icon } from '../index';
import { IconsWatchLaterProps } from '../WatchLater.types';

import { display } from './WatchLater-display.stories';
import { appearance } from './WatchLater-appearance.stories';
import { size } from './WatchLater-size.stories';
import { theme } from './WatchLater-theme.stories';

export const WatchLater = (args: IconsWatchLaterProps) => (
  <Icon {...args}></Icon>
);

WatchLater.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

WatchLater.argTypes = {
  display,
  appearance,
  size,
  theme,
};
