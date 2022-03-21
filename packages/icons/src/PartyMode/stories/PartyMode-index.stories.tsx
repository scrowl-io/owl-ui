import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPartyModeProps } from '../PartyMode.types';

import { display } from './PartyMode-display.stories';
import { appearance } from './PartyMode-appearance.stories';
import { size } from './PartyMode-size.stories';
import { theme } from './PartyMode-theme.stories';

export const PartyMode = (args: IconsPartyModeProps) => (
  <Icon {...args}></Icon>
);

PartyMode.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PartyMode.argTypes = {
  display,
  appearance,
  size,
  theme,
};
