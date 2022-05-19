import * as React from 'react';
import { component as Hello } from '../index';
import { HelloPlanetProps } from '../Planet.types';

import { appearance } from './Planet-appearance.stories';
import { size } from './Planet-size.stories';
import { theme } from './Planet-theme.stories';

export const Planet = (args: HelloPlanetProps) => <Hello {...args}>Hello World</Hello>;

Planet.args = {
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Planet.argTypes = {
  appearance,
  size,
  theme,
};
