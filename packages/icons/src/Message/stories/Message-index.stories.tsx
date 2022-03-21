import * as React from 'react';
import { component as Icon } from '../index';
import { IconsMessageProps } from '../Message.types';

import { display } from './Message-display.stories';
import { appearance } from './Message-appearance.stories';
import { size } from './Message-size.stories';
import { theme } from './Message-theme.stories';

export const Message = (args: IconsMessageProps) => (
  <Icon {...args}></Icon>
);

Message.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Message.argTypes = {
  display,
  appearance,
  size,
  theme,
};
