import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLocalPostOfficeProps } from '../LocalPostOffice.types';

import { display } from './LocalPostOffice-display.stories';
import { appearance } from './LocalPostOffice-appearance.stories';
import { size } from './LocalPostOffice-size.stories';
import { theme } from './LocalPostOffice-theme.stories';

export const LocalPostOffice = (args: IconsLocalPostOfficeProps) => (
  <Icon {...args}></Icon>
);

LocalPostOffice.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

LocalPostOffice.argTypes = {
  display,
  appearance,
  size,
  theme,
};
