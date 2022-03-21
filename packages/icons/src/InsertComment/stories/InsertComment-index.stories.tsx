import * as React from 'react';
import { component as Icon } from '../index';
import { IconsInsertCommentProps } from '../InsertComment.types';

import { display } from './InsertComment-display.stories';
import { appearance } from './InsertComment-appearance.stories';
import { size } from './InsertComment-size.stories';
import { theme } from './InsertComment-theme.stories';

export const InsertComment = (args: IconsInsertCommentProps) => (
  <Icon {...args}></Icon>
);

InsertComment.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

InsertComment.argTypes = {
  display,
  appearance,
  size,
  theme,
};
