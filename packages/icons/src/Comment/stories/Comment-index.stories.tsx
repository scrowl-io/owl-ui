import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCommentProps } from '../Comment.types';

import { display } from './Comment-display.stories';
import { appearance } from './Comment-appearance.stories';
import { size } from './Comment-size.stories';
import { theme } from './Comment-theme.stories';

export const Comment = (args: IconsCommentProps) => (
  <Icon {...args}></Icon>
);

Comment.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Comment.argTypes = {
  display,
  appearance,
  size,
  theme,
};
