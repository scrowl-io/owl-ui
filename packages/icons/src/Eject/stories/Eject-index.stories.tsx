import * as React from 'react';
import { component as Icon } from '../index';
import { IconsEjectProps } from '../Eject.types';

import { display } from './Eject-display.stories';
import { appearance } from './Eject-appearance.stories';
import { size } from './Eject-size.stories';
import { theme } from './Eject-theme.stories';

export const Eject = (args: IconsEjectProps) => (
  <Icon {...args}></Icon>
);

Eject.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Eject.argTypes = {
  display,
  appearance,
  size,
  theme,
};
