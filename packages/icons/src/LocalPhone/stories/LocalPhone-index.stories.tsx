import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLocalPhoneProps } from '../LocalPhone.types';

import { display } from './LocalPhone-display.stories';
import { appearance } from './LocalPhone-appearance.stories';
import { size } from './LocalPhone-size.stories';
import { theme } from './LocalPhone-theme.stories';

export const LocalPhone = (args: IconsLocalPhoneProps) => (
  <Icon {...args}></Icon>
);

LocalPhone.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

LocalPhone.argTypes = {
  display,
  appearance,
  size,
  theme,
};
