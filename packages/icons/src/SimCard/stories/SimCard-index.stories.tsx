import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSimCardProps } from '../SimCard.types';

import { display } from './SimCard-display.stories';
import { appearance } from './SimCard-appearance.stories';
import { size } from './SimCard-size.stories';
import { theme } from './SimCard-theme.stories';

export const SimCard = (args: IconsSimCardProps) => (
  <Icon {...args}></Icon>
);

SimCard.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SimCard.argTypes = {
  display,
  appearance,
  size,
  theme,
};
