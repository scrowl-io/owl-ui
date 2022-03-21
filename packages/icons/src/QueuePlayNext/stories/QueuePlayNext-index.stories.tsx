import * as React from 'react';
import { component as Icon } from '../index';
import { IconsQueuePlayNextProps } from '../QueuePlayNext.types';

import { display } from './QueuePlayNext-display.stories';
import { appearance } from './QueuePlayNext-appearance.stories';
import { size } from './QueuePlayNext-size.stories';
import { theme } from './QueuePlayNext-theme.stories';

export const QueuePlayNext = (args: IconsQueuePlayNextProps) => (
  <Icon {...args}></Icon>
);

QueuePlayNext.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

QueuePlayNext.argTypes = {
  display,
  appearance,
  size,
  theme,
};
