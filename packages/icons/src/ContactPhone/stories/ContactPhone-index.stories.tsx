import * as React from 'react';
import { component as Icon } from '../index';
import { IconsContactPhoneProps } from '../ContactPhone.types';

import { display } from './ContactPhone-display.stories';
import { appearance } from './ContactPhone-appearance.stories';
import { size } from './ContactPhone-size.stories';
import { theme } from './ContactPhone-theme.stories';

export const ContactPhone = (args: IconsContactPhoneProps) => (
  <Icon {...args}></Icon>
);

ContactPhone.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ContactPhone.argTypes = {
  display,
  appearance,
  size,
  theme,
};
