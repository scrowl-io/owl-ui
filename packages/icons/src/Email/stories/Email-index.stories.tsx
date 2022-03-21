import * as React from 'react';
import { component as Icon } from '../index';
import { IconsEmailProps } from '../Email.types';

import { display } from './Email-display.stories';
import { appearance } from './Email-appearance.stories';
import { size } from './Email-size.stories';
import { theme } from './Email-theme.stories';

export const Email = (args: IconsEmailProps) => (
  <Icon {...args}></Icon>
);

Email.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Email.argTypes = {
  display,
  appearance,
  size,
  theme,
};
