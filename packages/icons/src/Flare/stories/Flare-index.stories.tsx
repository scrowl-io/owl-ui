import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFlareProps } from '../Flare.types';

import { display } from './Flare-display.stories';
import { appearance } from './Flare-appearance.stories';
import { size } from './Flare-size.stories';
import { theme } from './Flare-theme.stories';

export const Flare = (args: IconsFlareProps) => (
  <Icon {...args}></Icon>
);

Flare.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Flare.argTypes = {
  display,
  appearance,
  size,
  theme,
};
