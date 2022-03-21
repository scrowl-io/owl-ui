import * as React from 'react';
import { component as Icon } from '../index';
import { IconsKeyboardVoiceProps } from '../KeyboardVoice.types';

import { display } from './KeyboardVoice-display.stories';
import { appearance } from './KeyboardVoice-appearance.stories';
import { size } from './KeyboardVoice-size.stories';
import { theme } from './KeyboardVoice-theme.stories';

export const KeyboardVoice = (args: IconsKeyboardVoiceProps) => (
  <Icon {...args}></Icon>
);

KeyboardVoice.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

KeyboardVoice.argTypes = {
  display,
  appearance,
  size,
  theme,
};
