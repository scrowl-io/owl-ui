import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLensProps } from '../Lens.types';

import { display } from './Lens-display.stories';
import { appearance } from './Lens-appearance.stories';
import { size } from './Lens-size.stories';
import { theme } from './Lens-theme.stories';

export const Lens = (args: IconsLensProps) => (
  <Icon {...args}></Icon>
);

Lens.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Lens.argTypes = {
  display,
  appearance,
  size,
  theme,
};
