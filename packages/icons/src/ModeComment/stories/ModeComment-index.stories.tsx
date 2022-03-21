import * as React from 'react';
import { component as Icon } from '../index';
import { IconsModeCommentProps } from '../ModeComment.types';

import { display } from './ModeComment-display.stories';
import { appearance } from './ModeComment-appearance.stories';
import { size } from './ModeComment-size.stories';
import { theme } from './ModeComment-theme.stories';

export const ModeComment = (args: IconsModeCommentProps) => (
  <Icon {...args}></Icon>
);

ModeComment.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ModeComment.argTypes = {
  display,
  appearance,
  size,
  theme,
};
