import * as React from 'react';
import { component as Icon } from '../index';
import { IconsTurnedInNotProps } from '../TurnedInNot.types';

import { display } from './TurnedInNot-display.stories';
import { appearance } from './TurnedInNot-appearance.stories';
import { size } from './TurnedInNot-size.stories';
import { theme } from './TurnedInNot-theme.stories';

export const TurnedInNot = (args: IconsTurnedInNotProps) => (
  <Icon {...args}></Icon>
);

TurnedInNot.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

TurnedInNot.argTypes = {
  display,
  appearance,
  size,
  theme,
};
