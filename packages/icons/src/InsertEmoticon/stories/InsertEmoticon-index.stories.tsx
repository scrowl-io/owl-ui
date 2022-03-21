import * as React from 'react';
import { component as Icon } from '../index';
import { IconsInsertEmoticonProps } from '../InsertEmoticon.types';

import { display } from './InsertEmoticon-display.stories';
import { appearance } from './InsertEmoticon-appearance.stories';
import { size } from './InsertEmoticon-size.stories';
import { theme } from './InsertEmoticon-theme.stories';

export const InsertEmoticon = (args: IconsInsertEmoticonProps) => (
  <Icon {...args}></Icon>
);

InsertEmoticon.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

InsertEmoticon.argTypes = {
  display,
  appearance,
  size,
  theme,
};
