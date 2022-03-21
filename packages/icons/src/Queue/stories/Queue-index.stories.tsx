import * as React from 'react';
import { component as Icon } from '../index';
import { IconsQueueProps } from '../Queue.types';

import { display } from './Queue-display.stories';
import { appearance } from './Queue-appearance.stories';
import { size } from './Queue-size.stories';
import { theme } from './Queue-theme.stories';

export const Queue = (args: IconsQueueProps) => (
  <Icon {...args}></Icon>
);

Queue.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Queue.argTypes = {
  display,
  appearance,
  size,
  theme,
};
