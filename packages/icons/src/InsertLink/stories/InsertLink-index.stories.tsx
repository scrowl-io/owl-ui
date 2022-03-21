import * as React from 'react';
import { component as Icon } from '../index';
import { IconsInsertLinkProps } from '../InsertLink.types';

import { display } from './InsertLink-display.stories';
import { appearance } from './InsertLink-appearance.stories';
import { size } from './InsertLink-size.stories';
import { theme } from './InsertLink-theme.stories';

export const InsertLink = (args: IconsInsertLinkProps) => (
  <Icon {...args}></Icon>
);

InsertLink.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

InsertLink.argTypes = {
  display,
  appearance,
  size,
  theme,
};
