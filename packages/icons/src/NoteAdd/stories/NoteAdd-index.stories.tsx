import * as React from 'react';
import { component as Icon } from '../index';
import { IconsNoteAddProps } from '../NoteAdd.types';

import { display } from './NoteAdd-display.stories';
import { appearance } from './NoteAdd-appearance.stories';
import { size } from './NoteAdd-size.stories';
import { theme } from './NoteAdd-theme.stories';

export const NoteAdd = (args: IconsNoteAddProps) => (
  <Icon {...args}></Icon>
);

NoteAdd.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

NoteAdd.argTypes = {
  display,
  appearance,
  size,
  theme,
};
