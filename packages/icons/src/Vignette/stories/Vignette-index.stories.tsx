import * as React from 'react';
import { component as Icon } from '../index';
import { IconsVignetteProps } from '../Vignette.types';

import { display } from './Vignette-display.stories';
import { appearance } from './Vignette-appearance.stories';
import { size } from './Vignette-size.stories';
import { theme } from './Vignette-theme.stories';

export const Vignette = (args: IconsVignetteProps) => (
  <Icon {...args}></Icon>
);

Vignette.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Vignette.argTypes = {
  display,
  appearance,
  size,
  theme,
};
