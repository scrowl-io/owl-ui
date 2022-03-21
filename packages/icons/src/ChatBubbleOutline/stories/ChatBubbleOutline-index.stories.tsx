import * as React from 'react';
import { component as Icon } from '../index';
import { IconsChatBubbleOutlineProps } from '../ChatBubbleOutline.types';

import { display } from './ChatBubbleOutline-display.stories';
import { appearance } from './ChatBubbleOutline-appearance.stories';
import { size } from './ChatBubbleOutline-size.stories';
import { theme } from './ChatBubbleOutline-theme.stories';

export const ChatBubbleOutline = (args: IconsChatBubbleOutlineProps) => (
  <Icon {...args}></Icon>
);

ChatBubbleOutline.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ChatBubbleOutline.argTypes = {
  display,
  appearance,
  size,
  theme,
};
