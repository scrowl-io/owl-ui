import * as React from 'react';
import { component as Icon } from '../index';
import { IconsRecordVoiceOverProps } from '../RecordVoiceOver.types';

import { display } from './RecordVoiceOver-display.stories';
import { appearance } from './RecordVoiceOver-appearance.stories';
import { size } from './RecordVoiceOver-size.stories';
import { theme } from './RecordVoiceOver-theme.stories';

export const RecordVoiceOver = (args: IconsRecordVoiceOverProps) => (
  <Icon {...args}></Icon>
);

RecordVoiceOver.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

RecordVoiceOver.argTypes = {
  display,
  appearance,
  size,
  theme,
};
