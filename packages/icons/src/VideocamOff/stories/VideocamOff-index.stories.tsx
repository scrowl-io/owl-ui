import * as React from 'react';
import { component as Icon } from '../index';
import { IconsVideocamOffProps } from '../VideocamOff.types';

import { display } from './VideocamOff-display.stories';
import { appearance } from './VideocamOff-appearance.stories';
import { size } from './VideocamOff-size.stories';
import { theme } from './VideocamOff-theme.stories';

export const VideocamOff = (args: IconsVideocamOffProps) => (
  <Icon {...args}></Icon>
);

VideocamOff.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

VideocamOff.argTypes = {
  display,
  appearance,
  size,
  theme,
};
