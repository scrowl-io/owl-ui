import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAddToQueueProps } from '../AddToQueue.types';

import { display } from './AddToQueue-display.stories';
import { appearance } from './AddToQueue-appearance.stories';
import { size } from './AddToQueue-size.stories';
import { theme } from './AddToQueue-theme.stories';

export const AddToQueue = (args: IconsAddToQueueProps) => (
  <Icon {...args}></Icon>
);

AddToQueue.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

AddToQueue.argTypes = {
  display,
  appearance,
  size,
  theme,
};
