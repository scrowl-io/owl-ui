import * as React from 'react';
import { component as Icon } from '../index';
import { IconsIsoProps } from '../Iso.types';

import { display } from './Iso-display.stories';
import { appearance } from './Iso-appearance.stories';
import { size } from './Iso-size.stories';
import { theme } from './Iso-theme.stories';

export const Iso = (args: IconsIsoProps) => (
  <Icon {...args}></Icon>
);

Iso.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Iso.argTypes = {
  display,
  appearance,
  size,
  theme,
};
