import * as React from 'react';
import { component as Icon } from '../index';
import { IconsVoiceChatProps } from '../VoiceChat.types';

import { display } from './VoiceChat-display.stories';
import { appearance } from './VoiceChat-appearance.stories';
import { size } from './VoiceChat-size.stories';
import { theme } from './VoiceChat-theme.stories';

export const VoiceChat = (args: IconsVoiceChatProps) => (
  <Icon {...args}></Icon>
);

VoiceChat.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

VoiceChat.argTypes = {
  display,
  appearance,
  size,
  theme,
};
