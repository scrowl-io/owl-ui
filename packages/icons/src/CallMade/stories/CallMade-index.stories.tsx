import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCallMadeProps } from '../CallMade.types';

import { display } from './CallMade-display.stories';
import { appearance } from './CallMade-appearance.stories';
import { size } from './CallMade-size.stories';
import { theme } from './CallMade-theme.stories';

export const CallMade = (args: IconsCallMadeProps) => (
  <Icon {...args}></Icon>
);

CallMade.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

CallMade.argTypes = {
  display,
  appearance,
  size,
  theme,
};
