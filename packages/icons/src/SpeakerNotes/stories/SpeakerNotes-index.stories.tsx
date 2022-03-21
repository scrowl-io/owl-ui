import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSpeakerNotesProps } from '../SpeakerNotes.types';

import { display } from './SpeakerNotes-display.stories';
import { appearance } from './SpeakerNotes-appearance.stories';
import { size } from './SpeakerNotes-size.stories';
import { theme } from './SpeakerNotes-theme.stories';

export const SpeakerNotes = (args: IconsSpeakerNotesProps) => (
  <Icon {...args}></Icon>
);

SpeakerNotes.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SpeakerNotes.argTypes = {
  display,
  appearance,
  size,
  theme,
};
