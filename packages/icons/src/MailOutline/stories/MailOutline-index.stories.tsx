import * as React from 'react';
import { component as Icon } from '../index';
import { IconsMailOutlineProps } from '../MailOutline.types';

import { display } from './MailOutline-display.stories';
import { appearance } from './MailOutline-appearance.stories';
import { size } from './MailOutline-size.stories';
import { theme } from './MailOutline-theme.stories';

export const MailOutline = (args: IconsMailOutlineProps) => (
  <Icon {...args}></Icon>
);

MailOutline.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

MailOutline.argTypes = {
  display,
  appearance,
  size,
  theme,
};
