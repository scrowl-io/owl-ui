import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPanoramaProps } from '../Panorama.types';

import { display } from './Panorama-display.stories';
import { appearance } from './Panorama-appearance.stories';
import { size } from './Panorama-size.stories';
import { theme } from './Panorama-theme.stories';

export const Panorama = (args: IconsPanoramaProps) => (
  <Icon {...args}></Icon>
);

Panorama.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Panorama.argTypes = {
  display,
  appearance,
  size,
  theme,
};
