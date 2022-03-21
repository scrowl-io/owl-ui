import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSpeakerGroupProps } from '../SpeakerGroup.types';

import { display } from './SpeakerGroup-display.stories';
import { appearance } from './SpeakerGroup-appearance.stories';
import { size } from './SpeakerGroup-size.stories';
import { theme } from './SpeakerGroup-theme.stories';

export const SpeakerGroup = (args: IconsSpeakerGroupProps) => (
  <Icon {...args}></Icon>
);

SpeakerGroup.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SpeakerGroup.argTypes = {
  display,
  appearance,
  size,
  theme,
};
