import * as React from 'react';
import { component as Icon } from '../index';
import { IconsVoicemailProps } from '../Voicemail.types';

import { display } from './Voicemail-display.stories';
import { appearance } from './Voicemail-appearance.stories';
import { size } from './Voicemail-size.stories';
import { theme } from './Voicemail-theme.stories';

export const Voicemail = (args: IconsVoicemailProps) => (
  <Icon {...args}></Icon>
);

Voicemail.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Voicemail.argTypes = {
  display,
  appearance,
  size,
  theme,
};
