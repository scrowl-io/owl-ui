import * as React from 'react';
import { component as Icon } from '../index';
import { IconsReplyAllProps } from '../ReplyAll.types';

import { display } from './ReplyAll-display.stories';
import { appearance } from './ReplyAll-appearance.stories';
import { size } from './ReplyAll-size.stories';
import { theme } from './ReplyAll-theme.stories';

export const ReplyAll = (args: IconsReplyAllProps) => (
  <Icon {...args}></Icon>
);

ReplyAll.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ReplyAll.argTypes = {
  display,
  appearance,
  size,
  theme,
};
