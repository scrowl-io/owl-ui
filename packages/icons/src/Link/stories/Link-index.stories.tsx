import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLinkProps } from '../Link.types';

import { display } from './Link-display.stories';
import { appearance } from './Link-appearance.stories';
import { size } from './Link-size.stories';
import { theme } from './Link-theme.stories';

export const Link = (args: IconsLinkProps) => (
  <Icon {...args}></Icon>
);

Link.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Link.argTypes = {
  display,
  appearance,
  size,
  theme,
};
