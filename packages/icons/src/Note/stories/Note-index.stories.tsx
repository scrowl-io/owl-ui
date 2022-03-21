import * as React from 'react';
import { component as Icon } from '../index';
import { IconsNoteProps } from '../Note.types';

import { display } from './Note-display.stories';
import { appearance } from './Note-appearance.stories';
import { size } from './Note-size.stories';
import { theme } from './Note-theme.stories';

export const Note = (args: IconsNoteProps) => (
  <Icon {...args}></Icon>
);

Note.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Note.argTypes = {
  display,
  appearance,
  size,
  theme,
};
