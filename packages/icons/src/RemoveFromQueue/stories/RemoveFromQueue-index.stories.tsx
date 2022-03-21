import * as React from 'react';
import { component as Icon } from '../index';
import { IconsRemoveFromQueueProps } from '../RemoveFromQueue.types';

import { display } from './RemoveFromQueue-display.stories';
import { appearance } from './RemoveFromQueue-appearance.stories';
import { size } from './RemoveFromQueue-size.stories';
import { theme } from './RemoveFromQueue-theme.stories';

export const RemoveFromQueue = (args: IconsRemoveFromQueueProps) => (
  <Icon {...args}></Icon>
);

RemoveFromQueue.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

RemoveFromQueue.argTypes = {
  display,
  appearance,
  size,
  theme,
};
