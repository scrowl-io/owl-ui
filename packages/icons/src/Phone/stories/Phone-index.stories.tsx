import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPhoneProps } from '../Phone.types';

import { display } from './Phone-display.stories';
import { appearance } from './Phone-appearance.stories';
import { size } from './Phone-size.stories';
import { theme } from './Phone-theme.stories';

export const Phone = (args: IconsPhoneProps) => (
  <Icon {...args}></Icon>
);

Phone.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Phone.argTypes = {
  display,
  appearance,
  size,
  theme,
};
