import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCallReceivedProps } from '../CallReceived.types';

import { display } from './CallReceived-display.stories';
import { appearance } from './CallReceived-appearance.stories';
import { size } from './CallReceived-size.stories';
import { theme } from './CallReceived-theme.stories';

export const CallReceived = (args: IconsCallReceivedProps) => (
  <Icon {...args}></Icon>
);

CallReceived.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

CallReceived.argTypes = {
  display,
  appearance,
  size,
  theme,
};
