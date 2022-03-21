import * as React from 'react';
import { component as Icon } from '../index';
import { IconsImportContactsProps } from '../ImportContacts.types';

import { display } from './ImportContacts-display.stories';
import { appearance } from './ImportContacts-appearance.stories';
import { size } from './ImportContacts-size.stories';
import { theme } from './ImportContacts-theme.stories';

export const ImportContacts = (args: IconsImportContactsProps) => (
  <Icon {...args}></Icon>
);

ImportContacts.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ImportContacts.argTypes = {
  display,
  appearance,
  size,
  theme,
};
