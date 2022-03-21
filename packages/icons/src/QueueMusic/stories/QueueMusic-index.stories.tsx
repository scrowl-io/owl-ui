import * as React from 'react';
import { component as Icon } from '../index';
import { IconsQueueMusicProps } from '../QueueMusic.types';

import { display } from './QueueMusic-display.stories';
import { appearance } from './QueueMusic-appearance.stories';
import { size } from './QueueMusic-size.stories';
import { theme } from './QueueMusic-theme.stories';

export const QueueMusic = (args: IconsQueueMusicProps) => (
  <Icon {...args}></Icon>
);

QueueMusic.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

QueueMusic.argTypes = {
  display,
  appearance,
  size,
  theme,
};
