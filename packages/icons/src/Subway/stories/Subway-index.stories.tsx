import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSubwayProps } from '../Subway.types';

import { display } from './Subway-display.stories';
import { appearance } from './Subway-appearance.stories';
import { size } from './Subway-size.stories';
import { theme } from './Subway-theme.stories';

export const Subway = (args: IconsSubwayProps) => (
  <Icon {...args}></Icon>
);

Subway.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Subway.argTypes = {
  display,
  appearance,
  size,
  theme,
};
