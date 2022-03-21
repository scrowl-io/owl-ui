import * as React from 'react';
import { component as Icon } from '../index';
import { IconsChatProps } from '../Chat.types';

import { display } from './Chat-display.stories';
import { appearance } from './Chat-appearance.stories';
import { size } from './Chat-size.stories';
import { theme } from './Chat-theme.stories';

export const Chat = (args: IconsChatProps) => (
  <Icon {...args}></Icon>
);

Chat.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Chat.argTypes = {
  display,
  appearance,
  size,
  theme,
};
