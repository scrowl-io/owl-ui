import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFlipProps } from '../Flip.types';

import { display } from './Flip-display.stories';
import { appearance } from './Flip-appearance.stories';
import { size } from './Flip-size.stories';
import { theme } from './Flip-theme.stories';

export const Flip = (args: IconsFlipProps) => (
  <Icon {...args}></Icon>
);

Flip.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Flip.argTypes = {
  display,
  appearance,
  size,
  theme,
};
