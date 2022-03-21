import * as React from 'react';
import { component as Icon } from '../index';
import { IconsTurnedInProps } from '../TurnedIn.types';

import { display } from './TurnedIn-display.stories';
import { appearance } from './TurnedIn-appearance.stories';
import { size } from './TurnedIn-size.stories';
import { theme } from './TurnedIn-theme.stories';

export const TurnedIn = (args: IconsTurnedInProps) => (
  <Icon {...args}></Icon>
);

TurnedIn.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

TurnedIn.argTypes = {
  display,
  appearance,
  size,
  theme,
};
