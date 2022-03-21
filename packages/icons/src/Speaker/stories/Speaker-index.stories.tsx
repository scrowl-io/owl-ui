import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSpeakerProps } from '../Speaker.types';

import { display } from './Speaker-display.stories';
import { appearance } from './Speaker-appearance.stories';
import { size } from './Speaker-size.stories';
import { theme } from './Speaker-theme.stories';

export const Speaker = (args: IconsSpeakerProps) => (
  <Icon {...args}></Icon>
);

Speaker.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Speaker.argTypes = {
  display,
  appearance,
  size,
  theme,
};
