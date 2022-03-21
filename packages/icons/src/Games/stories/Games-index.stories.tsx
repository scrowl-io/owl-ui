import * as React from 'react';
import { component as Icon } from '../index';
import { IconsGamesProps } from '../Games.types';

import { display } from './Games-display.stories';
import { appearance } from './Games-appearance.stories';
import { size } from './Games-size.stories';
import { theme } from './Games-theme.stories';

export const Games = (args: IconsGamesProps) => (
  <Icon {...args}></Icon>
);

Games.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Games.argTypes = {
  display,
  appearance,
  size,
  theme,
};
