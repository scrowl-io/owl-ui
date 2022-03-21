import * as React from 'react';
import { component as Icon } from '../index';
import { IconsChatBubbleProps } from '../ChatBubble.types';

import { display } from './ChatBubble-display.stories';
import { appearance } from './ChatBubble-appearance.stories';
import { size } from './ChatBubble-size.stories';
import { theme } from './ChatBubble-theme.stories';

export const ChatBubble = (args: IconsChatBubbleProps) => (
  <Icon {...args}></Icon>
);

ChatBubble.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ChatBubble.argTypes = {
  display,
  appearance,
  size,
  theme,
};
