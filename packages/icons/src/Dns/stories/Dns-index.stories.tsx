import * as React from 'react';
import { component as Icon } from '../index';
import { IconsDnsProps } from '../Dns.types';

import { display } from './Dns-display.stories';
import { appearance } from './Dns-appearance.stories';
import { size } from './Dns-size.stories';
import { theme } from './Dns-theme.stories';

export const Dns = (args: IconsDnsProps) => (
  <Icon {...args}></Icon>
);

Dns.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Dns.argTypes = {
  display,
  appearance,
  size,
  theme,
};
