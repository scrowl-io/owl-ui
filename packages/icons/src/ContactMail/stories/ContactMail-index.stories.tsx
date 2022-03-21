import * as React from 'react';
import { component as Icon } from '../index';
import { IconsContactMailProps } from '../ContactMail.types';

import { display } from './ContactMail-display.stories';
import { appearance } from './ContactMail-appearance.stories';
import { size } from './ContactMail-size.stories';
import { theme } from './ContactMail-theme.stories';

export const ContactMail = (args: IconsContactMailProps) => (
  <Icon {...args}></Icon>
);

ContactMail.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ContactMail.argTypes = {
  display,
  appearance,
  size,
  theme,
};
