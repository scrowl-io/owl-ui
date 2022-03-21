import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCloudQueueProps } from '../CloudQueue.types';

import { display } from './CloudQueue-display.stories';
import { appearance } from './CloudQueue-appearance.stories';
import { size } from './CloudQueue-size.stories';
import { theme } from './CloudQueue-theme.stories';

export const CloudQueue = (args: IconsCloudQueueProps) => (
  <Icon {...args}></Icon>
);

CloudQueue.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

CloudQueue.argTypes = {
  display,
  appearance,
  size,
  theme,
};
