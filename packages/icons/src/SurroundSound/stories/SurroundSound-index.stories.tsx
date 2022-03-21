import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSurroundSoundProps } from '../SurroundSound.types';

import { display } from './SurroundSound-display.stories';
import { appearance } from './SurroundSound-appearance.stories';
import { size } from './SurroundSound-size.stories';
import { theme } from './SurroundSound-theme.stories';

export const SurroundSound = (args: IconsSurroundSoundProps) => (
  <Icon {...args}></Icon>
);

SurroundSound.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SurroundSound.argTypes = {
  display,
  appearance,
  size,
  theme,
};
