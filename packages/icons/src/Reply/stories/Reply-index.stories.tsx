import * as React from 'react';
import { component as Icon } from '../index';
import { IconsReplyProps } from '../Reply.types';

import { display } from './Reply-display.stories';
import { appearance } from './Reply-appearance.stories';
import { size } from './Reply-size.stories';
import { theme } from './Reply-theme.stories';

export const Reply = (args: IconsReplyProps) => (
  <Icon {...args}></Icon>
);

Reply.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Reply.argTypes = {
  display,
  appearance,
  size,
  theme,
};
