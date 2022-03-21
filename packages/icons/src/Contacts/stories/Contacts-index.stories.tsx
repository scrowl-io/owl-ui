import * as React from 'react';
import { component as Icon } from '../index';
import { IconsContactsProps } from '../Contacts.types';

import { display } from './Contacts-display.stories';
import { appearance } from './Contacts-appearance.stories';
import { size } from './Contacts-size.stories';
import { theme } from './Contacts-theme.stories';

export const Contacts = (args: IconsContactsProps) => (
  <Icon {...args}></Icon>
);

Contacts.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Contacts.argTypes = {
  display,
  appearance,
  size,
  theme,
};
