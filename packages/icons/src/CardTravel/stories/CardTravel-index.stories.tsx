import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCardTravelProps } from '../CardTravel.types';

import { display } from './CardTravel-display.stories';
import { appearance } from './CardTravel-appearance.stories';
import { size } from './CardTravel-size.stories';
import { theme } from './CardTravel-theme.stories';

export const CardTravel = (args: IconsCardTravelProps) => (
  <Icon {...args}></Icon>
);

CardTravel.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

CardTravel.argTypes = {
  display,
  appearance,
  size,
  theme,
};
