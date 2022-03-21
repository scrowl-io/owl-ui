import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSpeakerNotesOffProps } from '../SpeakerNotesOff.types';

import { display } from './SpeakerNotesOff-display.stories';
import { appearance } from './SpeakerNotesOff-appearance.stories';
import { size } from './SpeakerNotesOff-size.stories';
import { theme } from './SpeakerNotesOff-theme.stories';

export const SpeakerNotesOff = (args: IconsSpeakerNotesOffProps) => (
  <Icon {...args}></Icon>
);

SpeakerNotesOff.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SpeakerNotesOff.argTypes = {
  display,
  appearance,
  size,
  theme,
};
