import * as React from 'react';
import { component as Icon } from '../index';
import { IconsEventNoteProps } from '../EventNote.types';

import { display } from './EventNote-display.stories';
import { appearance } from './EventNote-appearance.stories';
import { size } from './EventNote-size.stories';
import { theme } from './EventNote-theme.stories';

export const EventNote = (args: IconsEventNoteProps) => (
  <Icon {...args}></Icon>
);

EventNote.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

EventNote.argTypes = {
  display,
  appearance,
  size,
  theme,
};
