import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSpeakerPhoneProps } from '../SpeakerPhone.types';

import { display } from './SpeakerPhone-display.stories';
import { appearance } from './SpeakerPhone-appearance.stories';
import { size } from './SpeakerPhone-size.stories';
import { theme } from './SpeakerPhone-theme.stories';

export const SpeakerPhone = (args: IconsSpeakerPhoneProps) => (
  <Icon {...args}></Icon>
);

SpeakerPhone.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SpeakerPhone.argTypes = {
  display,
  appearance,
  size,
  theme,
};
