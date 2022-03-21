import * as React from 'react';
import { component as Icon } from '../index';
import { IconsMusicNoteProps } from '../MusicNote.types';

import { display } from './MusicNote-display.stories';
import { appearance } from './MusicNote-appearance.stories';
import { size } from './MusicNote-size.stories';
import { theme } from './MusicNote-theme.stories';

export const MusicNote = (args: IconsMusicNoteProps) => (
  <Icon {...args}></Icon>
);

MusicNote.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

MusicNote.argTypes = {
  display,
  appearance,
  size,
  theme,
};
