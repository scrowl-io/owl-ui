import * as React from 'react';
import { component as Icon } from '../index';
import { IconsTramProps } from '../Tram.types';

import { display } from './Tram-display.stories';
import { appearance } from './Tram-appearance.stories';
import { size } from './Tram-size.stories';
import { theme } from './Tram-theme.stories';

export const Tram = (args: IconsTramProps) => (
  <Icon {...args}></Icon>
);

Tram.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Tram.argTypes = {
  display,
  appearance,
  size,
  theme,
};
