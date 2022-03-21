import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCallMissedOutgoingProps } from '../CallMissedOutgoing.types';

import { display } from './CallMissedOutgoing-display.stories';
import { appearance } from './CallMissedOutgoing-appearance.stories';
import { size } from './CallMissedOutgoing-size.stories';
import { theme } from './CallMissedOutgoing-theme.stories';

export const CallMissedOutgoing = (args: IconsCallMissedOutgoingProps) => (
  <Icon {...args}></Icon>
);

CallMissedOutgoing.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

CallMissedOutgoing.argTypes = {
  display,
  appearance,
  size,
  theme,
};
