import * as React from 'react';
import { component as Icon } from '../index';
import { IconsTonalityProps } from '../Tonality.types';

import { display } from './Tonality-display.stories';
import { appearance } from './Tonality-appearance.stories';
import { size } from './Tonality-size.stories';
import { theme } from './Tonality-theme.stories';

export const Tonality = (args: IconsTonalityProps) => (
  <Icon {...args}></Icon>
);

Tonality.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Tonality.argTypes = {
  display,
  appearance,
  size,
  theme,
};
